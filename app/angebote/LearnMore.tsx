import Link from "next/link";
import { Button } from "../../components/Button";
import { ChevronRightIcon } from "../../components/icons/ChevronRightIcon";

interface Props {
  href: string;
}

export const LearnMore = ({ href }: Props) => (
  <Link href={href} className="block w-fit rounded-full">
    <Button tabIndex={-1} variant="secondary" endIcon={<ChevronRightIcon />}>
      Mehr erfahren
    </Button>
  </Link>
);
