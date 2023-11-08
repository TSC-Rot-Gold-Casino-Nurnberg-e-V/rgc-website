import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { variant = "primary", startIcon, endIcon, children, className, ...rest },
    ref
  ) => (
    <button
      ref={ref}
      className={twMerge(
        "w-fit",
        "rounded-full",
        "px-6",
        "py-3",
        "text-large",
        "transition-all",
        "flex",
        "items-center",
        "justify-center",
        "gap-2",
        "font-bold",
        variant === "primary" &&
          "bg-secondary-800 text-base-50 shadow hover:bg-secondary-700 hover:shadow-md",
        variant === "secondary" &&
          "border border-secondary-900 text-secondary-900 hover:border-secondary-700 hover:text-secondary-700 hover:shadow",
        startIcon && "pl-4",
        endIcon && "pr-4",
        className
      )}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
);
