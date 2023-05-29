import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PostCard } from "../../components/PostCard";
import { getPosts } from "../../api/api";
import { Post } from "../../model/Post";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
  totalPostCount: number;
}> = async () => {
  const { posts, pagination } = await getPosts(6);
  return {
    props: { posts: posts, totalPostCount: pagination.total },
  };
};

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [displayedPosts, setDisplayedPosts] = useState<Array<Post>>(posts);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function getMorePosts() {
    setIsLoading(true);
    const nextPage = page + 1;
    const { posts } = await getPosts(6, nextPage);
    setDisplayedPosts((prevState) => {
      return [...prevState, ...posts];
    });
    setPage(nextPage);
    setIsLoading(false);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="default-padding mx-auto">
        <div className="m-auto flex max-w-3xl flex-col gap-8">
          {posts.map((post, index) => (
            <PostCard
              postID={post.id}
              key={post.id}
              title={post.attributes.title}
              previewText={post.attributes.previewText}
              publishedDate={new Date(post.attributes.publishedAt)}
              previewImage={
                post.attributes.mainImage.data.attributes.formats.small?.url ??
                post.attributes.mainImage.data.attributes.url
              }
              imageOrder={index % 2 === 0 ? "first" : "last"}
            />
          ))}
        </div>
        {displayedPosts.length < totalPostCount && (
          <div className="mx-auto w-fit">
            <Button
              onClick={getMorePosts}
              disabled={isLoading}
              className={isLoading ? "loading" : undefined}
            >
              Mehr anzeigen
            </Button>
          </div>
        )}
      </main>
    </>
  );
}
