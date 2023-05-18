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
