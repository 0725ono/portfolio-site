export default function handler(req, res) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRILD_API_KEY); //SendGridのAPIキー
    console.log(process.env.SENDGRILD_API_KEY);

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

    (async () => {
      try {
        const response = await sgMail.send(toHostMsg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200);
  res.end();
}
