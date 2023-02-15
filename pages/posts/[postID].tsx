import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Post } from "../../model/Post";
import { getPost, getPosts } from "../../api/api";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { sanitizeHTMLField } from "../../utils/sanitizeHTMLField";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => {
    return { params: { postID: post.id.toString() } };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
  params,
}) => {
  if (typeof params?.postID !== "string") {
    throw new Error("Typeof parameter 'postID' is not string.");
  }
  const post = await getPost(params.postID);
  return { props: { post: post } };
};

export default function PostID({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="py-4 max-w-3xl m-auto grow max-lg:px-6">
        <h1 className="text-red-900 text-center text-3xl py-4 max-md:text-2xl">
          {post.attributes.title}
        </h1>
        <div className="prose m-auto">
          <div
            className="prose prose-img:m-auto prose-img:max-w-3xl prose-p:text-justify prose-img:rounded-lg prose-img:max-h-96"
            dangerouslySetInnerHTML={{
              __html: sanitizeHTMLField(post.attributes.description),
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
