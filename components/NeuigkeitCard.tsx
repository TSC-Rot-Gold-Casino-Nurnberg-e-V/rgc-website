import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../utils/formatDate";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"a"> {
  titel: string;
  vorschautext: string;
  datum: string;
  vorschaubild: string;
  slug: string;
  sizes: string;
  loadImageWithPriority?: boolean;
}

export const NeuigkeitCard = ({
  titel,
  vorschaubild,
  vorschautext,
  datum,
  slug,
  className,
  sizes,
  loadImageWithPriority = false,
  ...props
}: Props) => (
  <Link
    href={`/neuigkeiten/${slug}`}
    className={twMerge(
      "group rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl",
      className
    )}
    {...props}
  >
    <div className="relative h-[24rem] w-full overflow-hidden rounded-xl transition-all">
      <div className="absolute inset-0 h-full shrink-0">
        <Image
          src={vorschaubild}
          alt=""
          fill
          className="rounded-xl object-cover object-top transition-all duration-300"
          sizes={sizes}
          priority={loadImageWithPriority}
        />
      </div>
      <article className="relative z-10 h-full rounded-xl bg-gradient-to-b from-transparent to-base-950 p-6">
        <div className="relative top-20 flex h-full flex-col justify-end gap-3 transition-all duration-300 group-hover:top-0">
          <time dateTime={datum} className="text-extrasmall text-base-300">
            {formatDate(new Date(datum))}
          </time>
          <h2 className="text-large line-clamp-3 max-w-xs font-semibold text-base-200">
            {titel}
          </h2>
          {/* 72px = height of 3 lines */}
          <p className="line-clamp-3 min-h-[72px] text-transparent transition-all duration-300 group-hover:text-base-300">
            {vorschautext}
          </p>
        </div>
      </article>
    </div>
  </Link>
);
