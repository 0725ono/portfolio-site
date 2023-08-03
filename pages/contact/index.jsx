import React, { useRef, useState } from "react";
import { memo } from "react";
import { motion } from "framer-motion";
import WhiteBoxTransition from "../../src/utils/WhiteBoxTransition";
import Footer from "@/src/components/Footer/Footer";

const Contact = memo(() => {
  const initialValues = { username: "", mailAddress: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // 入力内容の取得
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // nodemailer用記述
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   //ログイン情報を送信+バリデーションチェックをする。
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);

  //   // APIを叩きrefで取得したものを送る、まずそのためのデータ格納変数を定義
  //   let data = {
  //     name: nameRef.current?.value,
  //     email: emailRef.current?.value,
  //     message: messageRef.current?.value,
  //   };

  //   await fetch("api/contact", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => {
  //     if (res.status === 200) console.log("メール送信成功");
  //   });
  // };
  // ここまでnodemailerを用いた実装の記述

  // ここからはSendGrid使用時の記述
  // sendEmailをhandleSubmitへ
  const handleSubmit = async (event) => {
    event.preventDefault();
    //ログイン情報を送信+バリデーションチェックをする。
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    // APIを叩きrefで取得したものを送る、まずそのためのデータ格納変数を定義
    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };
    const res = await fetch("api/send", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    console.log(process.env.NEXT_PUBLIC_SENDGRILD_API_KEY);
    const result = await res.json();
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.username) {
      errors.username = "ユーザー名を入力してください。";
    }
    if (!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください。";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください";
    }
    if (!values.message) {
      errors.message = "お問合せ内容を入力してください。";
    }
    return errors;
  };

  return (
    <>
      <WhiteBoxTransition>
        <motion.div
          className="container home-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Contact</h1>
            <hr />
            <div className="uiForm">
              <div className="formField">
                <label>お名前</label>
                <input
                  type="text"
                  placeholder="お名前"
                  name="username"
                  onChange={(e) => handleChange(e)}
                  ref={nameRef}
                />
              </div>
              <p className="errorMsg">{formErrors.username}</p>
              <div className="formField">
                <label>メールアドレス</label>
                <input
                  type="text"
                  placeholder="メールアドレス"
                  name="mailAddress"
                  onChange={(e) => handleChange(e)}
                  ref={emailRef}
                />
              </div>
              <p className="errorMsg">{formErrors.mailAddress}</p>
              <div className="formField">
                <label>お問合せ内容</label>
                <textarea
                  name="message"
                  placeholder="お問合せ内容について"
                  rows={4}
                  cols={50}
                  onChange={(e) => handleChange(e)}
                  ref={messageRef}
                />
              </div>
              <p className="errorMsg">{formErrors.message}</p>
              <button className="submitButton">送信</button>
              {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="msgOk">お問合せの送信に成功しました。</div>
              )}
            </div>
          </form>
        </motion.div>
        <Footer />
      </WhiteBoxTransition>
    </>
  );
});

Contact.displayName = "Contact";

export default Contact;
