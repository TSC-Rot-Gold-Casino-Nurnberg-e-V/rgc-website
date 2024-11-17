import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef } from "react";
import newsPlaceholder from "../../public/placeholder/news-placeholder.png";

interface Props extends ComponentPropsWithoutRef<"a"> {
  titel: string;
  vorschautext: string;
  datum: string;
  vorschaubild?: string;
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
      "group rounded-xl transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-xl",
      className,
    )}
    {...props}
  >
    <div className="relative h-[24rem] w-full overflow-hidden rounded-xl transition-all">
      <div className="absolute inset-0 h-full shrink-0">
        <Image
          src={vorschaubild ?? newsPlaceholder}
          alt=""
          fill
          className="rounded-xl object-cover object-top transition-all duration-300"
          sizes={sizes}
          priority={loadImageWithPriority}
        />
      </div>
      <article className="relative z-10 h-full rounded-xl bg-gradient-to-b from-transparent from-50% to-base-900 p-6">
        <div className="relative top-20 flex h-full flex-col justify-end gap-3 transition-all duration-300 sm:group-hover:top-0">
          <time dateTime={datum} className="text-xs text-base-300">
            {formatDate(new Date(datum))}
          </time>
          <h2 className="line-clamp-3 max-w-xs text-base font-bold text-base-100 sm:text-lg">
            {titel}
          </h2>
          {/* 70px = height of 3 lines */}
          <p className="line-clamp-3 min-h-[70px] text-sm text-transparent transition-all duration-300 sm:text-base sm:group-hover:text-base-100">
            {vorschautext}
          </p>
        </div>
      </article>
    </div>
  </Link>
);
