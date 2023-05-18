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
    <article className="group flex flex-col justify-between gap-10 rounded bg-white shadow hover:shadow-md sm:flex-row">
      <div
        className={`relative h-64 w-64 shrink-0 overflow-hidden max-sm:m-auto ${
          imageOrder === "first"
            ? "rounded-l md:order-first"
            : "rounded-r md:order-last"
        }`}
      >
        <Image
          src={previewImage}
          alt=""
          className={`object-cover ${
            imageOrder === "first" ? "rounded-l" : "rounded-r"
          } brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110`}
          fill
        />
      </div>
      <section className="max-h-64 p-6">
        <p className="pb-2 text-xs tracking-widest opacity-40">
          {formatDate(publishedDate)}
        </p>
        <h2 className="pb-3 text-2xl tracking-wide text-red-900">{title}</h2>
        <p className="text-normal line-clamp-3 opacity-60">{previewText}</p>
      </section>
    </article>
  </Link>
);
