import Link from "next/link";
import Image from "next/image";

interface Props {
  courseID: number;
  title: string;
  previewImage: string;
}

export const CourseCard = ({ title, previewImage, courseID }: Props) => {
  return (
    <Link
      href={`/courses/${courseID}`}
      className="group relative flex w-1/2 flex-col gap-4 shadow group-hover:shadow-md max-md:m-auto"
    >
      <div className="relative h-80 w-full">
        <Image
          src={previewImage}
          alt=""
          fill
          className="rounded-md bg-center object-cover  brightness-50 duration-700 group-hover:brightness-100"
        />
      </div>
      <h2 className="text-normal absolute bottom-0 w-full rounded-md px-2 py-5 text-center font-bold uppercase text-white backdrop-brightness-50">
        {title}
      </h2>
    </Link>
  );
};
