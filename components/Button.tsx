import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export const Button = ({
  children,
  className,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button
    className="primary-gradient w-fit rounded-md px-6 py-4 font-bold text-base-800 text-rose-950 shadow transition-all hover:scale-105 hover:text-rose-900 hover:shadow-md hover:shadow-rose-900/10"
    {...rest}
  >
    {children}
  </button>
);
