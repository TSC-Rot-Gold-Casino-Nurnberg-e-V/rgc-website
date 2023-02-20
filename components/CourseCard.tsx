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
      className="relative flex flex-col gap-4 shadow group group-hover:shadow-md max-md:m-auto w-1/2"
    >
      <div className="relative h-80 w-full">
        <Image
          src={previewImage}
          alt=""
          fill
          className="object-cover bg-center duration-700 brightness-50  group-hover:brightness-100 rounded-md rounded"
        />
      </div>
      <h2 className="absolute bottom-0 text-white text-md font-bold uppercase text-center w-full py-5 px-2 backdrop-brightness-50 rounded-md rounded">
        {title}
      </h2>
    </Link>
  );
};
