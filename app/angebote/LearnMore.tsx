import { ArrowRightIcon } from "../../components/icons/ArrowRightIcon";
import Link from "next/link";
import { Button } from "../../components/Button";

interface Props {
  href: string;
}

export const LearnMore = ({ href }: Props) => (
  <Link href={href} className="block w-fit rounded-md">
    <Button tabIndex={-1} variant="secondary" endIcon={<ArrowRightIcon />}>
      Mehr erfahren
    </Button>
  </Link>
);
