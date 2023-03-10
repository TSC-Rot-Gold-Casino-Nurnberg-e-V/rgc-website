import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PostCard } from "../../components/PostCard";
import { getPosts } from "../../api/api";
import { Post } from "../../model/Post";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = await getPosts();
  return {
    props: { posts: posts },
  };
};

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="bg-stone-50 grow">
          <main className="mx-auto p-6 md:p-8">
            <div className="flex flex-col gap-8 max-w-3xl m-auto">
              {posts.map((post, index) => (
                <PostCard
                  postID={post.id}
                  key={post.id}
                  title={post.attributes.title}
                  previewText={post.attributes.previewText}
                  publishedDate={new Date(post.attributes.publishedAt)}
                  previewImage={
                    post.attributes.mainImage.data.attributes.formats.small
                      ?.url ?? post.attributes.mainImage.data.attributes.url
                  }
                  imageOrder={index % 2 === 0 ? "first" : "last"}
                />
              ))}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
