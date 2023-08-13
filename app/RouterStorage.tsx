"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const RouterStorage = () => {
  const prevPathname = useRef<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      sessionStorage.setItem("prevPathname", prevPathname.current);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};
