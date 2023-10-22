import { AnchorHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "../../components/Button";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  image: StaticImageData;
  href: string;
  priority?: boolean;
  imageSizes?: string;
}

export const AngebotCard = ({
  title,
  image,
  href,
  priority = false,
  imageSizes,
  className,
  ...rest
}: Props) => (
  <Link
    className={twMerge(
      "group relative w-full cursor-pointer rounded-md",
      className
    )}
    {...rest}
    href={href}
  >
    <div className="absolute inset-0">
      <Image
        src={image}
        alt=""
        className="rounded-lg object-cover object-top saturate-0 duration-700 group-hover:saturate-100 group-focus:saturate-100"
        fill
        placeholder="blur"
        priority={priority}
        sizes={imageSizes}
      />
    </div>
    <div className="relative z-10 mx-auto flex h-full w-fit items-end pb-12">
      <Button tabIndex={-1} className="w-fit">
        {title}
      </Button>
    </div>
  </Link>
);
