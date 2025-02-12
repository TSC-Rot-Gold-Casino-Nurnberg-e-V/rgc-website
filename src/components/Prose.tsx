import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import Markdown from "react-markdown";
import Image from "next/image";
import rehypeRaw from "rehype-raw";

interface Props {
  content?: string;
}

export const Prose = ({
  content,
  className,
  children,
  ...props
}: Props & ComponentPropsWithoutRef<"div">) => (
  <div
    className={twMerge(
      "prose",
      "prose-neutral",
      "sm:prose-lg",
      "prose-headings:hyphens-auto",
      "prose-p:hyphens-auto",
      "prose-img:rounded-xl",
      "prose-img:object-cover",
      "prose-img:object-top",
      "prose-img:m-0",
      "prose-table:block",
      "prose-table:overflow-x-auto",
      className,
    )}
    {...props}
  >
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ node, ...props }) => <a {...props} target="_blank" />,
        p: ({ node, ...props }) => {
          const firstChild = node?.children[0];
          if (firstChild?.type === "element" && firstChild?.tagName === "img") {
            return <div {...props} />;
          }
          return <p {...props} />;
        },
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
            <div className="w-full">
              <div
                className="relative mx-auto max-h-96 sm:max-h-[32rem]"
                style={{ aspectRatio }}
              >
                <Image
                  src={src}
                  alt={alt}
                  priority
                  fill
                  sizes="(max-width: 640px) 100vw, 800px"
                />
              </div>
            </div>
          );
        },
      }}
    >
      {content}
    </Markdown>
    {children}
  </div>
);
