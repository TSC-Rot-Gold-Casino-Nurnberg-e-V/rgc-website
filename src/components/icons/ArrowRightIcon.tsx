import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const ArrowRightIcon = ({
  className,
  ...props
}: Omit<ComponentProps<"svg">, "children">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={twMerge("size-5", className)}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>
);
