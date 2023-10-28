import EmailService from "../email";
import { Ticket } from "./interface";

export class GticTicket implements Ticket {
  private static instance: GticTicket;
  private constructor() {}

  async create(data: any) {
    const text = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    const html = Object.entries(data)
      .map(([key, value]) => `<b>${key}</b>: ${value}`)
      .join("</br>");

    const subject = `${data.unidade} - ${data.servico} - ${data.tipoServico}`;
    const to = data.sendTo;
    const from = { name: data.name, email: data.email };
    EmailService.send({ from, to, subject, text, html });
  }

  public static getInstance() {
    console.log("instance", this.instance);
    if (!this.instance) this.instance = new GticTicket();
    console.log("instance1", this.instance);
    return this.instance;
  }
}
