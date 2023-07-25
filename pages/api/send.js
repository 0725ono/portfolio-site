export default async function handler(req, res) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRILD_API_KEY); //SendGridのAPIキー

    const toHostMsg = {
      from: req.body.email,
      to: "onoma437@gmail.com",
      subject: `[お問い合わせ]${req.body.name}様より`,
      text: `${req.body.message} Send from ${req.body.email}`,
      html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メッセージ内容】</p>
        <p>${req.body.message}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
    `,
    };

    try {
      await sgMail.send(toHostMsg);
      console.log("msg送信成功");
      res.status(200).json({ message: "メール送信成功" });
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
      res.status(500).json({ message: "メール送信に失敗しました" });
    }
  }
}
