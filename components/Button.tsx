import { HTMLAttributes, PropsWithChildren } from "react";

export const Button = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      className="w-fit rounded-md bg-accent px-6 py-4 font-bold text-dark-grey"
      {...rest}
    >
      {children}
    </button>
  );
};
