import React, { useState, useEffect, memo, useRef } from "react";
import Modal, { worksArray } from "../src/components/Modal/Modal";
// import { useInView } from 'react-intersection-observer';
//framer-motionを使用するためのインポート
import { motion } from "framer-motion";
import WhiteBoxTransition from "../src/utils/WhiteBoxTransition";
import Footer from "@/src/components/Footer/Footer";

const HomePage = memo(() => {
  const [openModal, setOpenModal] = useState(false);

  // const [ref, inView] = useInView({
  //   rootMargin: '0px 0px',
  // });

  //ここからスクロールオブザーバー
  const targets = useRef([]);
  const addToTargets = (el) => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });
    targets.current.forEach((target) => {
      observer.observe(target);
    });
  }, [targets]);
  //ここまで

  const modalToShow = worksArray.find((work) => work.id === openModal);

  return (
    <>
      <WhiteBoxTransition className="container all">
        <motion.div
          className="home-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="homepage-bg">
            <div className="container home-content"></div>
          </div>

          {/* about me */}
          <section className="about-me">
            <div className="container">
              <div className="about-me-top">
                <h2 className="sec-title">
                  <span className="sub-sec-title">about</span>
                  <br />
                  <span className="sub-sec-title halfup">me</span>
                </h2>
                <div className="img-container"></div>
              </div>
              <div className="about-me-bottom">
                <p className="about-me-desc">
                  魅力的なウェブサイトを作ることで人に喜んでもらいたい。おもしろいコンセプトをもとに作られたウェブサイトとの出会いをきっかけに趣味でプログラミングを始めました。
                  知人バンドのホームページを作ったことをきっかけに、魅力的なウェブサイトをつくる仕事がしたい、と思い前職を退職。これまでスクールやオンライン講座などでプログラミングの技術を学習。
                  より素敵なサイトを作れるよう学習をしている最中です。
                </p>
                {/* <button className="viewmore">view more</button> */}
              </div>
            </div>
          </section>

          {/* skills */}
          <section className="skills">
            <div className="container">
              <div className="works-title">
                <h2 className="skill-title">skills</h2>
                <p>使用可能なスキル</p>
              </div>
              <div className="skill-grid">
                <div className="skill-item" ref={addToTargets}>
                  <img src="./img/languages/html-5.svg" alt="" />
                  <p>HTML</p>
                </div>
                <div className="skill-item" ref={addToTargets}>
                  <img src="./img/languages/css-3.svg" alt="" />
                  <p>CSS</p>
                </div>
                <div className="skill-item" ref={addToTargets}>
                  <img src="./img/languages/tailwindcss.svg" alt="" />
                  <p>Tailwindcss</p>
                </div>
                <div className="skill-item" ref={addToTargets}>
                  <img src="./img/languages/javascript.svg" alt="" />
                  <p>Javascript</p>
                </div>
                <div className="skill-item" ref={addToTargets}>
                  <img src="./img/languages/jquery.svg" alt="" />
                  <p>jQuery</p>
                </div>
                <div className="skill-item" ref={addToTargets}>
                  <img src="./img/languages/react.svg" alt="" />
                  <p>React</p>
                </div>
                <div className="skill-item" ref={addToTargets}>
                  <img src="./img/languages/nextjs.svg" alt="" />
                  <p>Next.js</p>
                </div>
                <div className="skill-item" ref={addToTargets}>
                  <img src="./img/languages/nodejs.svg" alt="" />
                  <p>node.js</p>
                </div>
                <div className="skill-item" ref={addToTargets}>
                  <img src="./img/languages/mongodb.svg" alt="" />
                  <p>mongoDB</p>
                </div>
              </div>
            </div>
          </section>

          {/* strength */}
          <section className="strength">
            <div className="strength-top">
              <h2 className="strength-title">
                <span className="strength-sub-title">strength</span>
              </h2>
            </div>

            <div className="container">
              <div className="strength-container">
                <img
                  src="./img/strength/strength1.jpg"
                  alt="強みを象徴する写真です"
                  className="strengthImg"
                />
                <div className="strength-desc-container">
                  <h3>現状を俯瞰しながら変革する力</h3>
                  <p>
                    前職では年々業務量が増えていました。そこで、私は業務フローの見直しやエクセルのマクロを活用して業務効率化に取り組みました。このように常に現状を改善する視点を持ち、主体的に業務を遂行することができます。この経験を通じて、新しいテクノロジーを駆使して業務を改善し、効率化することに強い関心を抱いたと同時に、デザインと技術を組み合わせてユーザー体験を向上させることにも熱意を持って取り組んでいきたいと考えています。
                  </p>
                </div>
              </div>
              <div className="strength-container">
                <img
                  src="./img/strength/strength2.jpg"
                  alt="強みを象徴する写真です"
                  className="strengthImg"
                />
                <div className="strength-desc-container">
                  <h3>対話から解決策を見つけ出し実行する力</h3>
                  <p>
                    私は前職の窓口業務などにおいて、相談者の声を注意深く聞き取り、彼らが抱える問題やニーズを明確にすることに注力してきました。その結果、適切な助言や関連制度の紹介、関係機関との連携を行うことができました。フロントエンドエンジニアとしても、ユーザーやクライアントのニーズを理解し、解決策を提案する能力を持っています。
                  </p>
                </div>
              </div>
              <div className="strength-container">
                <img
                  src="./img/strength/strength3.jpg"
                  alt="強みを象徴する写真です"
                  className="strengthImg"
                />
                <div className="strength-desc-container">
                  <h3>チームコーディネート力</h3>
                  <p>
                    前職では、係内の知識に偏りがあったため、一貫性のない対応がクレームの原因となることがありました。そこで私は自身の知識をマニュアル化し、他の職員と共有する取り組みを行いました。さらに、積極的に他の職員とコミュニケーションを取り、対応に苦慮しているケースなどは自分の経験や知識を共有するようにしました。このように、対応したケースについて他の職員にも情報共有を促し、職員間の連携を強化しました。その結果、職員同士がよりスムーズに情報を共有し、より良い対応を実現できるようになりました。私はこの経験を通じて、チームをまとめ、組織全体の円滑な運営に貢献する力を身につけました。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* works */}
          <section
            id="works"
            className={`works ${openModal === false ? "" : "modalshow"}`}
          >
            <div className="container">
              <div className="works-title">
                <h2>works</h2>
              </div>
              <div className="grid">
                {worksArray.map((work, i) => {
                  return (
                    <div className="item" ref={addToTargets} key={i}>
                      <div
                        className="modal-open"
                        onClick={() => setOpenModal(work.id)}
                      >
                        <img
                          src={work.img}
                          alt="作成されたサイトのサンプル画像"
                        />

                        <p>{work.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* footer */}
          <Footer />
        </motion.div>
      </WhiteBoxTransition>

      {/* モーダル */}
      {modalToShow && (
        <Modal closeModal={setOpenModal} modalId={modalToShow.id} />
      )}
    </>
  );
});

HomePage.displayName = "HomePage";

export default HomePage;
