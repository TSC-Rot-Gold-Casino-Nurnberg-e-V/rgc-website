import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../utils/formatDate";

interface Props {
  title: string;
  previewText: string;
  publishedDate: string;
  previewImage: string;
  postID: number;
}

export const PostCard = ({
  title,
  previewImage,
  previewText,
  publishedDate,
  postID,
}: Props) => (
  <Link
    href={`/posts/${postID}`}
    key={postID}
    className="group rounded-xl transition-all duration-500 hover:!opacity-100 group-hover/container:opacity-50"
  >
    <div className="relative h-[24rem] w-full max-w-md overflow-hidden rounded-xl transition-all">
      <div className="absolute inset-0 h-full shrink-0">
        <Image
          src={previewImage}
          alt=""
          fill
          className="rounded-xl object-cover object-top transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 712px) 100vw, (max-width: 1072px) 50vw, 33vw"
        />
      </div>
      <article className="relative z-10 h-full rounded-md bg-gradient-to-b from-transparent to-base-900 p-6">
        <div className="relative top-16 flex h-full flex-col justify-end gap-3 transition-all duration-500 group-hover:top-0">
          <time
            dateTime={publishedDate}
            className="text-extrasmall text-base-300"
          >
            {formatDate(new Date(publishedDate))}
          </time>
          <h2 className="text-large line-clamp-3 max-w-xs font-semibold text-base-200">
            {title}
          </h2>
          <p className="line-clamp-2 text-transparent transition-all duration-500 group-hover:text-base-300">
            {previewText}
          </p>
        </div>
      </article>
    </div>
  </Link>
);
