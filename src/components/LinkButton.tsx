import Link from "next/link";
import { Button } from "./Button";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"a"> {
  href: string;
  text: string;
  target?: string;
}

export const LinkButton = ({
  href,
  text,
  target,
  className,
  ...props
}: Props) => (
  <Link
    href={href}
    target={target}
    className={twMerge("block w-fit rounded-full", className)}
    {...props}
  >
    <Button
      className="w-full"
      tabIndex={-1}
      variant="secondary"
      endIcon={<ChevronRightIcon className="size-4" />}
    >
      {text}
    </Button>
  </Link>
);
