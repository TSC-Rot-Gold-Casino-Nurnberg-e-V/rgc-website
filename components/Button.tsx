import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export const Button = ({
  children,
  className,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button
    className={`primary-gradient w-fit rounded-md px-6 py-4 font-bold text-secondary-950 shadow transition-all hover:scale-105 hover:text-secondary-900 hover:shadow-md hover:shadow-secondary-900/10 ${className}`}
    {...rest}
  >
    {children}
  </button>
);
