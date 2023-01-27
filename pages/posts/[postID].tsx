import ReactMarkdown from "react-markdown";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

interface Richtext {
  title: string;
  description: string;
}

interface Post {
  id: number;
  attributes: Richtext;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.CMS_URL}/api/posts?sort=chronologicalPosition:desc`,
    {
      headers: { Authorization: `Bearer ${process.env.CMS_TOKEN}` },
    }
  );
  if (!res.ok) {
    const error = await res.json();
    throw new Error(JSON.stringify(error));
  }
  const data: { data: Post[] } = await res.json();
  const paths = data.data.map((post) => {
    return { params: { postID: post.id.toString() } };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
  params,
}) => {
  const res = await fetch(
    `${process.env.CMS_URL}/api/posts/${params?.postID}`,
    {
      headers: { Authorization: `Bearer ${process.env.CMS_TOKEN}` },
    }
  );
  const data: { data: Post } = await res.json();
  return { props: { post: data.data } };
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
