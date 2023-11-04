import { ArrowRightIcon } from "../../components/icons/ArrowRightIcon";
import Link from "next/link";

interface Props {
  href: string;
}

export const LearnMore = ({ href }: Props) => (
  <Link
    href={href}
    className="text-normal flex w-fit items-center gap-2 rounded-md border border-base-700 px-4 py-2 transition-all hover:border-secondary-900 hover:text-accent hover:shadow"
  >
    <span>Mehr erfahren</span>
    <ArrowRightIcon />
  </Link>
);
