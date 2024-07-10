import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Main = ({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"main">) => (
  <main className={twMerge("max-w-full grow", className)} {...rest}>
    {children}
  </main>
);
