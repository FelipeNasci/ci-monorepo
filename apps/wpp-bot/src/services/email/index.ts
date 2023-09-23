const nodemailer = require("nodemailer");
import { email } from '../../../config'

const transporter = nodemailer.createTransport(email);

export async function sendEmail({ sendTo, ...data } ) {
  console.log(data, `${data.unidade} - ${data.servico} - ${data.tipoServico}`);
  // transporter.sendMail({
  //   from: `"${data.name}" <${email.auth.user}>`, // sender address
  //   replyTo: `"${data.name}" <${data.email}>`,
  //   to: sendTo, // list of receivers
  //   subject: `${data.unidade} - ${data.servico} - ${data.tipoServico}`, // Subject line
  //   text: Object.entries(data)
  //     .map(([key, value]) => `${key}: ${value}`)
  //     .join("\n"), // plain text body
  //   html: Object.entries(data)
  //     .map(([key, value]) => `<b>${key}</b>: ${value}`)
  //     .join("</br>"), // html
  // });
}
