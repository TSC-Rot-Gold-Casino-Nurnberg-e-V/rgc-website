import { ComponentPropsWithoutRef } from "react";
import { sanitizeHTMLField } from "../utils/sanitizeHTMLField";
import { twMerge } from "tailwind-merge";

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
      className
    )}
    {...props}
    dangerouslySetInnerHTML={{ __html: sanitizeHTMLField(content) }}
  />
);
