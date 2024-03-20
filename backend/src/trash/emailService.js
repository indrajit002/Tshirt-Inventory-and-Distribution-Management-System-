// // emailService.js
// const nodemailer = require("nodemailer");

// function sendMail(from, to, subject, text, html) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // Use `true` for port 465, `false` for all other ports
//         auth: {
//           user: "maddison53@ethereal.email",
//           pass: "jn7jnAPss4f63QBp6D",
//         },
//       });

//       // send mail with defined transport object
//       const info = await transporter.sendMail({
//         from: from,
//         to: to,
//         subject: subject,
//         text: text,
//         html: html,
//       });

//       resolve(info.messageId);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// module.exports = { sendMail };
