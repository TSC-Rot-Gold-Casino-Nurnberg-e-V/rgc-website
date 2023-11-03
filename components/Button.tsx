import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  variant?: "primary" | "secondary";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export const Button = ({
  variant = "primary",
  startIcon,
  endIcon,
  children,
  className,
  ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<"button">> & Props) => (
  <button
    className={twMerge(
      "w-fit",
      "rounded-md",
      "px-6",
      "py-4",
      "text-large",
      "transition-all",
      "hover:text-accent",
      "flex",
      "items-center",
      "gap-2",
      variant === "primary" &&
        "gold-gradient px-6 py-4 font-bold text-secondary-950 hover:scale-105 hover:shadow",
      variant === "secondary" && "border px-4 py-2 hover:border-secondary-900",
      startIcon && "pr-5",
      endIcon && "pl-5",
      className
    )}
    {...rest}
  >
    {startIcon}
    {children}
    {endIcon}
  </button>
);
