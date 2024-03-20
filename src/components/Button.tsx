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
    ref,
  ) => (
    <button
      ref={ref}
      className={twMerge(
        "w-fit",
        "rounded-full",
        "px-6",
        "py-3",
        "text-lg",
        "transition-all",
        "flex",
        "items-center",
        "justify-center",
        "gap-2",
        "font-bold",
        "hover:shadow",
        variant === "primary" &&
          "bg-secondary-700 text-base-50 hover:bg-secondary-800 active:bg-secondary-900",
        variant === "secondary" &&
          "border border-secondary-700 text-secondary-700 hover:border-secondary-800 hover:bg-secondary-50 hover:text-secondary-800 active:border-secondary-900 active:text-secondary-900",
        startIcon && "pl-4",
        endIcon && "pr-4",
        className,
      )}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  ),
);

Button.displayName = "Button";
