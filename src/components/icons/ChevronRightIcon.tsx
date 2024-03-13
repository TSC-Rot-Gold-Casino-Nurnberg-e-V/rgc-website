import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const ChevronRightIcon = ({
  className,
  ...props
}: Omit<ComponentProps<"svg">, "children">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className={twMerge("size-5", className)}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);
