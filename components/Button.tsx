import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Button = ({
  children,
  className,
  ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<"button">>) => (
  <button
    className={twMerge(
      "gold-gradient",
      "btn",
      "w-fit",
      "rounded-md",
      "border-none",
      "focus:outline-offset-4",
      "focus:outline-secondary-900",
      "px-6",
      "py-4",
      "font-bold",
      "text-secondary-950",
      "shadow",
      "transition-all",
      "hover:scale-105",
      "hover:text-accent",
      "hover:shadow-md",
      "hover:shadow-secondary-900/10",
      className
    )}
    {...rest}
  >
    {children}
  </button>
);
