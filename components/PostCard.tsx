import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../utils/formatDate";

interface Props {
  title: string;
  previewText: string;
  publishedDate: Date;
  previewImage: string;
  postID: number;
  imageOrder: "first" | "last";
}

export const PostCard = ({
  title,
  previewImage,
  previewText,
  publishedDate,
  postID,
  imageOrder,
}: Props) => (
  <Link href={`/posts/${postID}`}>
    <article className="flex-col sm:flex-row bg-white shadow rounded flex justify-between group gap-10 hover:shadow-md">
      <div
        className={`relative h-64 w-64 shrink-0 overflow-hidden max-sm:m-auto ${
          imageOrder === "first"
            ? "md:order-first rounded-l"
            : "md:order-last rounded-r"
        }`}
      >
        <Image
          src={previewImage}
          alt=""
          className={`object-cover ${
            imageOrder === "first" ? "rounded-l" : "rounded-r"
          } brightness-95 group-hover:brightness-110 group-hover:scale-105 duration-700 transition-all`}
          fill
        />
      </div>
      <section className="p-6 max-h-64">
        <p className="text-xs opacity-40 tracking-widest pb-2">
          {formatDate(publishedDate)}
        </p>
        <h2 className="text-2xl text-red-900 tracking-wide pb-3">{title}</h2>
        <p className="text-md opacity-60 line-clamp-3">{previewText}</p>
      </section>
    </article>
  </Link>
);
