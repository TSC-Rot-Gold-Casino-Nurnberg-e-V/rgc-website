import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow p-6 md:p-8">
        <div className="flex max-md:flex-col gap-8 max-w-3xl m-auto p">
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
      <Footer />
    </div>
  );
}
