import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Post } from "../../model/Post";
import { getAllPosts, getPost } from "../../api/api";
import { sanitizeHTMLField } from "../../utils/sanitizeHTMLField";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
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
    <main className="m-auto max-w-3xl grow py-4 max-lg:px-6">
      <h1 className="py-4 text-center text-3xl text-red-900 max-md:text-2xl">
        {post.attributes.title}
      </h1>
      <div className="prose m-auto">
        <div
          className="prose prose-p:text-justify prose-img:m-auto prose-img:max-h-96 prose-img:max-w-3xl prose-img:rounded-lg"
          dangerouslySetInnerHTML={{
            __html: sanitizeHTMLField(post.attributes.description),
          }}
        />
      </div>
    </main>
  );
}
