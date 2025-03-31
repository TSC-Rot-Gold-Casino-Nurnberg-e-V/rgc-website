"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { usePathname } from "next/navigation";

const SHOW_LIVESTREAM = process.env.NEXT_PUBLIC_SHOW_LIVESTREAM === "true";

export const LiveStreamChip = () => {
  const currentPath = usePathname();
  const isLivestreamPage = currentPath === "/livestream";

  return SHOW_LIVESTREAM && !isLivestreamPage ? (
    <Link
      href="/livestream"
      className="mx-auto grid w-fit -translate-y-1/2 grid-cols-[auto_1fr_auto] items-center rounded-full bg-base-800 shadow transition-all hover:scale-105 hover:bg-base-700"
    >
      <div className="w-fit animate-pulse rounded-l-full bg-secondary-600 py-1 pl-3.5 pr-3 font-bold">
        LIVE
      </div>
      {/* TODO: make text and visibility configurable via CMS */}
      <div className="truncate px-3">Mittelfränkisches Tanzsportwochenende</div>
      <ChevronRightIcon className="size-4 w-full shrink-0 pr-3" />
    </Link>
  ) : null;
};
