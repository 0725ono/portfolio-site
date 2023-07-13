import { client } from "@/libs/client";
import parse from "html-react-parser";
import Link from "next/link";

// SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  return (
    <main className="blogTopContainer">
      <div className="blogContainer">
        <div className="article-top">
          <Link href="/blog" className="backlink">
            記事一覧へ戻る
          </Link>
        </div>

        <div className="article-contents">
          <h1 className="article-title">{blog.title}</h1>
          <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
          <div>{parse(blog.body)}</div>
        </div>
      </div>
    </main>
  );
}
