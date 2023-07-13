import React, { useState } from "react";
import { memo } from "react";
import { motion } from "framer-motion";
import WhiteBoxTransition from "../../src/utils/WhiteBoxTransition";
import Footer from "@/src/components/Footer/Footer";

const Contact = memo(() => {
  const initialValues = { username: "", mailAddress: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //ログイン情報を送信+バリデーションチェックをする。
    setFormErrors(validate(formValues));
    setIsSubmit(true);
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
