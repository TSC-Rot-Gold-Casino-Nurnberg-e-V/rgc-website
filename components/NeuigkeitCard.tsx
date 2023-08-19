"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../utils/formatDate";

interface Props {
  titel: string;
  vorschautext: string;
  datum: string;
  vorschaubild: string;
  slug: string;
}

export const NeuigkeitCard = ({
  titel,
  vorschaubild,
  vorschautext,
  datum,
  slug,
}: Props) => (
  <Link
    href={`/neuigkeiten/${slug}`}
    key={slug}
    className="group rounded-xl transition-all duration-500 hover:!opacity-100 group-hover/container:opacity-50"
    onClick={() => {
      sessionStorage.setItem("prevScrollY", window.scrollY.toString());
    }}
  >
    <div className="relative h-[24rem] w-full max-w-md overflow-hidden rounded-xl transition-all">
      <div className="absolute inset-0 h-full shrink-0">
        <Image
          src={vorschaubild}
          alt=""
          fill
          className="rounded-xl object-cover object-top transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 712px) 100vw, (max-width: 1072px) 50vw, 33vw"
          priority
        />
      </div>
      <article className="relative z-10 h-full rounded-md bg-gradient-to-b from-transparent to-base-900 p-6">
        <div className="relative top-16 flex h-full flex-col justify-end gap-3 transition-all duration-500 group-hover:top-0">
          <time dateTime={datum} className="text-extrasmall text-base-300">
            {formatDate(new Date(datum))}
          </time>
          <h2 className="text-large line-clamp-3 max-w-xs font-semibold text-base-200">
            {titel}
          </h2>
          <p className="line-clamp-2 text-transparent transition-all duration-500 group-hover:text-base-300">
            {vorschautext}
          </p>
        </div>
      </article>
    </div>
  </Link>
);
