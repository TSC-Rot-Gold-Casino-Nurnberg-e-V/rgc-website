"use client";

import Link from "next/link";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { twJoin } from "tailwind-merge";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { Liveticker, livetickerSchema } from "@/model/Liveticker";

const chipClasses =
  "flex max-w-[calc(100vw-4rem)] items-center gap-2 rounded-full bg-base-800 px-4 py-1.5 text-sm text-base-50 shadow-sm ring-1 ring-primary-500/30 sm:max-w-sm sm:text-base md:max-w-md lg:max-w-lg";

const interactiveChipClasses =
  "group transition-all hover:scale-105 hover:bg-base-700 hover:ring-primary-400/60";

/**
 * Fetched on the client so that the statically rendered pages stay static while the
 * liveticker itself is always up to date on the first reload of the website.
 */
export const LiveTicker = () => {
  const liveticker = useLiveticker();

  if (liveticker === null) {
    return null;
  }

  const { text, link } = liveticker;

  return (
    <section
      aria-label="Liveticker"
      className="mx-auto flex w-fit max-w-full -translate-y-1/2 justify-center"
    >
      {link === undefined ? (
        <div className={twJoin(chipClasses, "group")}>
          <LiveTickerContent text={text} />
        </div>
      ) : isExternalLink(link) ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={twJoin(chipClasses, interactiveChipClasses)}
        >
          <LiveTickerContent text={text}>
            <ExternalLinkIcon className="size-4 shrink-0" aria-hidden="true" />
            <span className="sr-only">(öffnet in einem neuen Tab)</span>
          </LiveTickerContent>
        </Link>
      ) : (
        <Link
          href={link}
          className={twJoin(chipClasses, interactiveChipClasses)}
        >
          <LiveTickerContent text={text}>
            <ChevronRightIcon className="size-4 shrink-0" aria-hidden="true" />
          </LiveTickerContent>
        </Link>
      )}
    </section>
  );
};

const useLiveticker = () => {
  const [liveticker, setLiveticker] = useState<Liveticker | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const loadLiveticker = async () => {
      try {
        const res = await fetch("/api/liveticker", {
          cache: "no-store",
          signal: abortController.signal,
        });
        if (!res.ok) {
          return;
        }
        const parsedLiveticker = livetickerSchema.safeParse(await res.json());
        setLiveticker(parsedLiveticker.success ? parsedLiveticker.data : null);
      } catch (error) {
        if (!abortController.signal.aborted) {
          console.warn("Could not load the liveticker: ", error);
        }
      }
    };
    void loadLiveticker();
    return () => abortController.abort();
  }, []);

  return liveticker;
};

const LiveTickerContent = ({
  text,
  children,
}: PropsWithChildren<{ text: string }>) => (
  <>
    <PulsingDot />
    <TickerText text={text} />
    {children}
  </>
);

/**
 * Displays `text` truncated with an ellipsis as long as it fits. If it overflows its
 * container, it instead scrolls horizontally so that longer ticker messages stay fully
 * readable, especially on narrow mobile screens. Scrolling pauses on hover/focus and is
 * skipped entirely for `prefers-reduced-motion` users.
 */
const TickerText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [marqueeDurationS, setMarqueeDurationS] = useState<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const measure = () => {
      const container = containerRef.current;
      const measureEl = measureRef.current;
      if (!container || !measureEl) {
        return;
      }
      const overflowsContainer =
        measureEl.scrollWidth > container.clientWidth + 1;
      if (prefersReducedMotion || !overflowsContainer) {
        setMarqueeDurationS(null);
        return;
      }
      const pixelsPerSecond = 35;
      setMarqueeDurationS(measureEl.scrollWidth / pixelsPerSecond);
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [text]);

  return (
    <div ref={containerRef} className="relative min-w-0 flex-1 overflow-hidden">
      {/* Invisible reference element used only to measure the text's natural width. */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="invisible absolute top-0 left-0 whitespace-nowrap"
      >
        {text}
      </span>
      {marqueeDurationS === null ? (
        <span className="block truncate underline-offset-4 group-hover:underline">
          {text}
        </span>
      ) : (
        <div className="flex w-max">
          <MarqueeCopy text={text} durationS={marqueeDurationS} />
          <MarqueeCopy text={text} durationS={marqueeDurationS} ariaHidden />
        </div>
      )}
    </div>
  );
};

const MarqueeCopy = ({
  text,
  durationS,
  ariaHidden,
}: {
  text: string;
  durationS: number;
  ariaHidden?: boolean;
}) => (
  <span
    aria-hidden={ariaHidden}
    className="shrink-0 animate-infinite-scroll pr-12 whitespace-nowrap group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused]"
    style={{ animationDuration: `${durationS}s` }}
  >
    {text}
  </span>
);

const PulsingDot = () => (
  <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
    <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary-500 opacity-75" />
    <span className="relative inline-flex size-2.5 rounded-full bg-secondary-500" />
  </span>
);

const isExternalLink = (link: string) => /^(https?:)?\/\//i.test(link);
