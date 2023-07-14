import React, { useState } from "react";
import { memo } from "react";
import { motion } from "framer-motion";

const worksArray = [
  {
    id: 1,
    name: "結婚式の応募サイト",
    content:
      "今年に行う予定である自分たちの結婚式の情報を入力していただくWebページを作成しました。フロントエンドからバックエンドまで自身で実装を行いました。Reactを用いて、入力内容を確認する画面を経て、問題がなければ送信する仕様になっています。今後、デザインや詳細の修正を行ったのちデプロイする予定です。",
    img: "/img/works/wedding/wedding1.png",
    otherImg: [
      "/img/works/wedding/wedding1.png",
      "/img/works/wedding/wedding2.png",
      "/img/works/wedding/wedding3.png",
    ],
    lang: "HTML/CSS, Javascript, React, Node.js, express, mongoose, mongoDB",
  },
  {
    id: 2,
    name: "SNSアプリ",
    content:
      "React, MongoDB, Express, Reactを使用したSNSアプリです。Udemyの講座をもとに基本的な機能を作成しました。この講座を通して、CRUD操作や、ユーザー登録の機能、フロントエンドとバックエンドの接続などを学びました。また、ユーザー表示ページ、簡単なユーザー検索機能、各ユーザーのフォロー、フォロワー数の表示、いいね機能、ログアウトの機能を追加実装しました。",
    img: "/img/works/snsapp/snsapp1.png",
    otherImg: [
      "/img/works/snsapp/snsapp1.png",
      "/img/works/snsapp/snsapp2.png",
      "/img/works/snsapp/snsapp3.png",
    ],
    lang: "HTML/CSS, Javascript, React, Node.js, express, mongoose, mongoDB",
  },
  {
    id: 3,
    name: "ポートフォリオサイト",
    content:
      "このWebページです。Reactを使用し、自身のことについて知ってもらえるようなページを作成しました。プログラミング言語のロゴやworksは画面上に入ったことを検知し、アニメーション付与させるようにしました。今後、ブログ記事のページの実装やパフォーマンスの向上などその通り自分のできることを試す実験の場として運用していけたらと考えています。",
    img: "/img/sample.jpg",
    otherImg: [],
    lang: "HTML/CSS, Javascript, React, Node.js, express, mongoose, mongoDB",
  },
  {
    id: 4,
    name: "Marimband Crickets Homepage",
    content:
      "友人たちと組んでいたバンドのホームページ作成を行いました。自身が学びながら初めて作ったページです。各ページにアサイドを作成し、共通の項についてはそれぞれのページへ遷移しても同じ表示になるようにしました。また携帯サイズになった時にはハンバーガーメニューの実装も行いました。",
    img: "/img/works/marimband/marimband1.png",
    otherImg: [
      "/img/works/marimband/marimband1.png",
      "/img/works/marimband/marimband2.png",
      "/img/works/marimband/marimband3.png",
    ],
    lang: "HTML/CSS, Javascript, jQuery",
  },
  {
    id: 5,
    name: "And More",
    content:
      "その他にもNext.js, Node.js, Prisma, Supabaseを使用した簡単なSNSアプリや学習書などを通して様々なサンプルサイトなどを作成してきました。",
    img: "/img/works/andmore/Tailwindsample.png",
    otherImg: [
      "/img/works/andmore/Tailwindsample.png",
      "/img/works/andmore/reduxshopping.png",
      "/img/works/andmore/hotelhp.png",
    ],
    lang: "HTML/CSS, Jacascript, GSAP, Next.js, Node.js, Prisma, Supabase, TailwindCSS",
  },
];

const Modal = memo(({ closeModal, modalId }) => {
  const work = worksArray.find((work) => work.id === modalId);

  // 選択された画像を表示する仕組み
  const [selectedImage, setSelectedImage] = useState(work.img);
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <motion.div
      className="modalBackground"
      onClick={() => {
        closeModal(false);
      }}
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <div
        className="modalContainer"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="close-btn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{work?.name}</h1>
        </div>
        <div className="modal-contents">
          <div className="modal-desc">
            <div className="body">
              <p>{work?.content}</p>
            </div>
            <div className="footer">
              <p>使用言語など</p>
              <p>{work?.lang}</p>
            </div>
          </div>
          <div className="modal-img-container">
            <div className="modal-sampleimg">
              {work.otherImg &&
                work.otherImg.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`作成されたサイトのサンプル画像 ${index + 1}`}
                    className="modal-sample-item"
                    onClick={() => handleImageSelect(image)}
                  />
                ))}
            </div>
            <img
              src={selectedImage}
              alt="作成されたサイトのサンプル画像"
              className="modal-img"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

Modal.displayName = "Modal";

export default Modal;
export { worksArray };
