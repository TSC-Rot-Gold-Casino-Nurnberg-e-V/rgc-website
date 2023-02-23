import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getCourse, getCourses } from "../../api/api";
import { Course } from "../../model/Course";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { sanitizeHTMLField } from "../../utils/sanitizeHTMLField";
import { TrainerCard } from "../../components/TrainerCard";

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getCourses();
  const paths = courses.map((course) => {
    return { params: { courseID: course.id.toString() } };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ course: Course }> = async ({
  params,
}) => {
  if (typeof params?.courseID !== "string") {
    throw new Error("Typeof parameter 'postID' is not string.");
  }
  const course = await getCourse(params.courseID);
  console.log(
    course.attributes.trainers.data[0].attributes.image?.data?.attributes.url
  );
  return { props: { course: course } };
};

export default function CourseID({
  course,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="py-4 max-w-3xl m-auto grow max-lg:px-6">
        <h1 className="text-red-900 text-center text-3xl py-4 max-md:text-2xl">
          {course.attributes.title}
        </h1>
        <div className="prose m-auto flex flex-col gap-6">
          <div
            className="prose-p:text-justify"
            dangerouslySetInnerHTML={{
              __html: sanitizeHTMLField(course.attributes.description),
            }}
          />
        </div>
        <h2 className="font-bold text-2xl my-2 max-md:text-center">Trainer</h2>
        <div className="flex gap-10 justify-between flex-wrap max-w-prose max-md:flex-col max-md:items-center">
          {course.attributes.trainers.data.map((trainer) => {
            return (
              <TrainerCard
                name={trainer.attributes.name}
                licence={trainer.attributes.licence}
                key={trainer.id}
                image={trainer.attributes.image?.data?.attributes.url}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
