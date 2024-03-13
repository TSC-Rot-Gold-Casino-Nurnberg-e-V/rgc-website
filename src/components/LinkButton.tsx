import Link from "next/link";
import { Button } from "./Button";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";

interface Props {
  href: string;
  text: string;
}

export const LinkButton = ({ href, text }: Props) => (
  <Link href={href} className="block w-fit rounded-full">
    <Button
      tabIndex={-1}
      variant="secondary"
      endIcon={<ChevronRightIcon className="size-4" />}
    >
      {text}
    </Button>
  </Link>
);
