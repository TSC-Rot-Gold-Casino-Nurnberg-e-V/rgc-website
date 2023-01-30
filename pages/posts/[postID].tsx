import ReactMarkdown from "react-markdown";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Post } from "../../model/Post";
import { getPost, getPosts } from "../../api/api";
import remarkGfm from "remark-gfm";

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
    <div className="p-8 max-w-2xl m-auto bg-white">
      <h1 className="text-red-900 text-center text-3xl">
        {post.attributes.title}
      </h1>
      <div className="prose m-auto">
        <ReactMarkdown
          className="prose-img:m-auto prose-p:text-justify prose-img:rounded-lg prose-img:max-w-3xl prose-img:max-h-96"
          remarkPlugins={[remarkGfm]}
        >
          {post.attributes.description}
        </ReactMarkdown>
      </div>
    </div>
  );
}
