import { useEffect, useState } from "react";

const MINIMAL_ACTIVATION_OFFSET = 0;

export function useHideNavbar(): boolean {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const { scrollY } = window;
      const measuredScrollDirection = scrollY > lastScrollY ? "down" : "up";
      const offSetY = Math.abs(scrollY - lastScrollY);

      setScrollDirection((prevScrollDirection) => {
        if (
          measuredScrollDirection !== prevScrollDirection &&
          offSetY > MINIMAL_ACTIVATION_OFFSET
        ) {
          return prevScrollDirection === "down" ? "up" : "down";
        }
        return prevScrollDirection;
      });

      lastScrollY = Math.max(scrollY, 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection === "down";
}
