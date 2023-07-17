"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// TODO evtl. mit neuem App-Router lösbar
//  ("route" wird benötigt um zu entscheiden, ob scroll-Position zurückgesetzt werden muss)

export const RouterStorage = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      sessionStorage.setItem("route", pathname);
    }
  }, [pathname]);

  return null;
};
