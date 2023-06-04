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
    <main className="default-padding bg-gradient-to-r from-base-50 to-base-300 py-6 sm:py-12">
      <div className="prose-xl prose mx-auto">
        <div
          className="prose-h1:heading-normal sm:prose-h1:heading-large prose-headings:text-secondary-900 prose-p:hyphens-auto prose-img:max-h-[24rem] prose-img:w-full prose-img:rounded-md prose-img:object-cover prose-img:object-top sm:prose-img:max-h-[32rem]"
          dangerouslySetInnerHTML={{
            __html: sanitizeHTMLField(post.attributes.description),
          }}
        />
      </div>
    </main>
  );
}
