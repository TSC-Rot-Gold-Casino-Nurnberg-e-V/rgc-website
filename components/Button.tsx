import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export const Button = ({
  children,
  className,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button
    className={`primary-gradient hover:heading-color btn w-fit rounded-md border-none px-6 py-4 font-bold text-secondary-950 shadow transition-all hover:scale-105 hover:shadow-md hover:shadow-secondary-900/10 ${className}`}
    {...rest}
  >
    {children}
  </button>
);
