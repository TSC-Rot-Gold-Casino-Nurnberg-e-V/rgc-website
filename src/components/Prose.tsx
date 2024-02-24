import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import Markdown from "react-markdown";
import Image from "next/image";
import rehypeRaw from "rehype-raw";

interface Props {
  content: string;
}

export const Prose = ({
  content,
  className,
  ...props
}: Props & Omit<ComponentPropsWithoutRef<"div">, "children">) => (
  <div
    className={twMerge(
      "prose",
      "sm:prose-lg",
      "prose-headings:hyphens-auto",
      "prose-headings:text-accent",
      "prose-p:hyphens-auto",
      "prose-p:text-base-600",
      "prose-a:text-accent",
      "prose-img:max-h-[24rem]",
      "prose-img:w-full",
      "prose-img:rounded-xl",
      "prose-img:object-cover",
      "prose-img:object-top",
      "sm:prose-img:max-h-[32rem]",
      className,
    )}
    {...props}
  >
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ node, ...props }) => <a {...props} target="_blank" />,
        img: ({ src = "", alt = "", height, width }) => {
          const DEFAULT_ASPECT_RATIO = 4 / 3;
          const parsedHeight = Number(height);
          const parsedWidth = Number(width);
          const aspectRatio =
            isNaN(parsedHeight) ||
            isNaN(parsedWidth) ||
            parsedHeight === 0 ||
            parsedWidth === 0
              ? DEFAULT_ASPECT_RATIO
              : parsedWidth / parsedHeight;

          return (
            <div className="relative" style={{ aspectRatio }}>
              <Image
                src={src}
                alt={alt}
                priority
                fill
                sizes="(max-width: 640px) 100vw, 800px"
              />
            </div>
          );
        },
      }}
    >
      {content}
    </Markdown>
  </div>
);
