"use client";

import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface ColorSwatchProps {
  token: string;
  shade: string;
  hex: string;
}

type CopyStatus = "idle" | "copied" | "error";

export const ColorSwatch = ({ token, shade, hex }: ColorSwatchProps) => {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  useEffect(() => {
    if (copyStatus !== "copied") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopyStatus("idle");
    }, 1500);

    return () => window.clearTimeout(timeoutId);
  }, [copyStatus]);

  const copyHex = async () => {
    if (!navigator.clipboard) {
      setCopyStatus("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(hex);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  const CopyIcon = copyStatus === "copied" ? CheckIcon : ClipboardDocumentIcon;

  return (
    <button
      type="button"
      className="group flex w-full items-center gap-4 rounded-xl bg-white p-3 pr-5 text-left shadow-sm ring-1 ring-base-200 transition hover:-translate-y-0.5 hover:shadow-md"
      onClick={copyHex}
      aria-label={`${token} ${hex} kopieren`}
    >
      <span
        className="size-14 shrink-0 rounded-lg ring-1 ring-inset ring-black/10"
        style={{ backgroundColor: hex }}
        aria-hidden="true"
      />
      <span className="min-w-0 grow">
        <span className="block font-semibold text-base-900">{shade}</span>
        <code className="block text-sm text-base-600">{hex}</code>
      </span>
      <CopyIcon
        className="size-5 shrink-0 text-secondary-700 transition-colors group-hover:text-secondary-900"
        aria-hidden="true"
      />
      <span className="sr-only" aria-live="polite">
        {copyStatus === "copied"
          ? `${hex} wurde kopiert.`
          : copyStatus === "error"
            ? "Kopieren ist in diesem Browser nicht möglich."
            : ""}
      </span>
    </button>
  );
};
