import Link from "next/link";
import { Button } from "./Button";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";

interface Props {
  href: string;
  text: string;
  target?: string;
}

export const LinkButton = ({ href, text, target }: Props) => (
  <Link href={href} target={target} className="block w-fit rounded-full">
    <Button
      tabIndex={-1}
      variant="secondary"
      endIcon={<ChevronRightIcon className="size-4" />}
    >
      {text}
    </Button>
  </Link>
);
