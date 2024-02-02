import { AnchorHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  image: StaticImageData;
  href: string;
  loadImageWithPriority?: boolean;
  imageSizes?: string;
  imageClassName?: string;
}

export const AngebotCard = ({
  title,
  image,
  href,
  loadImageWithPriority = false,
  imageSizes = "100vw",
  className,
  imageClassName,
  ...rest
}: Props) => (
  <Link
    className={twMerge(
      "group rounded-md transition-all hover:shadow-lg sm:hover:scale-105",
      className
    )}
    {...rest}
    href={href}
  >
    <div className="relative h-full w-full">
      <Image
        src={image}
        alt=""
        className={twMerge(
          "rounded-lg object-cover object-top brightness-95 duration-700 group-hover:brightness-105 group-focus:brightness-105",
          imageClassName
        )}
        fill
        placeholder="blur"
        priority={loadImageWithPriority}
        sizes={imageSizes}
      />
      <div className="absolute inset-0 top-auto flex h-40 items-end justify-center rounded-lg bg-gradient-to-b from-transparent to-base-900 pb-6">
        <h2 className="heading-small max-sm:text-gold group-hover:text-gold group-focus:text-gold p-1 text-center text-base-200">
          {title}
        </h2>
      </div>
    </div>
  </Link>
);
