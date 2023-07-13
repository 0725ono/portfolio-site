import { client } from "@/libs/client";
import Footer from "@/src/components/Footer/Footer";
import Link from "next/link";

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <>
      <div className="blogTopContainer">
        <div className="blogContainer">
          <div className="about-blog">
            <h1>このブログについて</h1>
            <p>
              このブログは自身の勉強のため、またポートフォリオのためにNext.jsとmicrocmsを合わせて作成しました。
            </p>
            <p>
              自身が学んできた内容、そこから疑問に思ったこと、考えたことなど自身の思考の整理を行う場所として活用していきたいと考えています。
            </p>
          </div>
          <div className="article-list">
            {blog.map((blog) => (
              <div key={blog.id} className="article">
                <Link href={`blog/${blog.id}`}>
                  <h2 className="article-title">{blog.title}</h2>
                  <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
