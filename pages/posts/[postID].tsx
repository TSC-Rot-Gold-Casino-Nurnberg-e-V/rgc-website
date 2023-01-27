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
    throw new Error(await res.json());
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
    <div className="w-96 h-96 prose">
      <div>Content</div>
      <div>
        <ReactMarkdown>{post.attributes.title}</ReactMarkdown>
        <ReactMarkdown>{post.attributes.description}</ReactMarkdown>
      </div>
    </div>
  );
}
