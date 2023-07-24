import { ComponentPropsWithoutRef } from "react";
import { sanitizeHTMLField } from "../utils/sanitizeHTMLField";

interface Props {
  content: string;
}

export const Prose = ({
  content,
  className = "",
  ...props
}: Props & Omit<ComponentPropsWithoutRef<"div">, "children">) => (
  <div
    className={`
    prose-h1:heading-large
    prose-h2:heading-normal
    prose-h3:heading-small
    prose-h4:heading-extrasmall
    prose-p:text-normal
    sm:prose-p:text-large
    prose
    prose-headings:hyphens-auto
    prose-headings:text-accent
    prose-p:hyphens-auto
    prose-p:text-base-600
    prose-a:text-accent
    prose-strong:font-bold
    prose-li:accent-secondary-900
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
