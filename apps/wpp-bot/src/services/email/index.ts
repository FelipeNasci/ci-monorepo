const nodemailer = require("nodemailer");
import { email } from '../../../config'

const transporter = nodemailer.createTransport(email);

export async function sendEmail({ sendTo, ...data } ) {
  transporter.sendMail({
    from: email.auth.user, // sender address
    to: sendTo, // list of receivers
    subject: `${data.unidade} - ${data.servico} - ${data.tipoServico}`, // Subject line
    text: Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n'), // plain text body
    html: Object.entries(data).map(([key, value]) => `<b>${key}</b>: ${value}`).join('</br>'), // html
  });
}
