import { ComponentProps } from "react";
import { sanitizeHTMLField } from "../utils/sanitizeHTMLField";

interface Props {
  content: string;
}

export const Prose = ({
  content,
  className,
  children,
  ...props
}: Props & ComponentProps<"div">) => (
  <div
    className={`
    prose-h1:heading-large
    prose-h2:heading-normal
    prose-h3:heading-small
    prose-h4:heading-extrasmall
    prose-p:text-normal
    sm:prose-p:text-large
    prose
    max-w-screen-lg
    prose-headings:hyphens-auto
    prose-headings:text-secondary-900
    prose-p:hyphens-auto
    prose-p:text-base-600
    prose-a:text-secondary-900
    prose-strong:font-bold
    prose-strong:text-base-900
    prose-li:accent-secondary-900
    prose-img:max-h-[24rem]
    prose-img:w-full
    prose-img:rounded-xl
    prose-img:object-cover
    prose-img:object-top
    sm:prose-img:max-h-[32rem] 
    ${className ?? ""}
    `}
    {...props}
    dangerouslySetInnerHTML={{ __html: sanitizeHTMLField(content) }}
  >
    {children}
  </div>
);
