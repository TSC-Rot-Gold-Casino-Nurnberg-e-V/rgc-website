import { ComponentPropsWithoutRef } from "react";
import { sanitizeHTMLField } from "../utils/sanitizeHTMLField";

interface Props {
  content: string;
}

// TODO: use tailwind-merge for className overrides
export const Prose = ({
  content,
  className = "",
  ...props
}: Props & Omit<ComponentPropsWithoutRef<"div">, "children">) => (
  <div
    className={`
    prose
    prose-headings:hyphens-auto
    prose-headings:text-accent
    prose-p:hyphens-auto
    prose-p:text-base-600
    prose-a:text-accent
    prose-strong:font-bold
    prose-img:max-h-[24rem]
    prose-img:w-full
    prose-img:rounded-xl
    prose-img:object-cover
    prose-img:object-top
    sm:prose-img:max-h-[32rem] 
    ${className}
    `}
    {...props}
    dangerouslySetInnerHTML={{ __html: sanitizeHTMLField(content) }}
  />
);
