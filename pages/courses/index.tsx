import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Course } from "../../model/Course";
import { getCourses } from "../../api/api";
import { CourseCard } from "../../components/CourseCard";

export const getStaticProps: GetStaticProps<{
  courses: Course[];
}> = async () => {
  const courses = await getCourses();
  return {
    props: { courses: courses },
  };
};

export default function Courses({
  courses,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="default-padding grow">
      <div className="m-auto flex max-w-3xl gap-8 max-md:flex-col">
        {courses.map((course) => {
          return (
            <CourseCard
              courseID={course.id}
              title={course.attributes.title}
              previewImage={
                course.attributes.previewImage.data.attributes.formats.small
                  ?.url ?? course.attributes.previewImage.data.attributes.url
              }
              key={course.id}
            />
          );
        })}
      </div>
    </main>
  );
}

const CourseCard = ({
  title,
  image,
  href,
  priority = false,
  imageSizes,
  className = "",
  ...rest
}: CourseCardProps) => (
  <Link
    className={`group relative w-full rounded-md hover:cursor-pointer ${className}`}
    {...rest}
    href={href}
  >
    <div className="absolute inset-0">
      <Image
        src={image}
        alt=""
        className="rounded-lg object-cover object-top saturate-0 duration-700 group-hover:saturate-100 group-focus:saturate-100"
        fill
        placeholder="blur"
        priority={priority}
        sizes={imageSizes}
      />
    </div>
    <div className="relative z-10 mx-auto flex h-full w-fit items-end pb-12">
      <Button tabIndex={-1} className="w-40">
        {title}
      </Button>
    </div>
  </Link>
);
