import ReactMarkdown from "react-markdown";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Post } from "../../model/Post";
import { getPost, getPosts } from "../../api/api";

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
    <div className="h-fit prose bg-red-500 m-auto">
      <div className="">
        <ReactMarkdown className="bg-blue-300 prose-p:m-0">
          {post.attributes.title}
        </ReactMarkdown>
        <ReactMarkdown className="prose-p:m-0 prose-li:m-0 prose-headings:m-0 text-center">
          {post.attributes.description}
        </ReactMarkdown>
      </div>
    </div>
  );
}
