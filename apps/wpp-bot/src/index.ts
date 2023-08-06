import whatsappMessages from './services/whatsapp-messages'
import { botManager } from './bot-manager'

function sendMessage(client, sendTo, text: string) {
  client
    .sendText(sendTo, text)
    .then((result) => { })
    .catch((erro) => {
      console.error("ERRO: ", erro);
    });
}

async function startServer() {
  whatsappMessages.createServer()
    .then((client) => handleClient(client))
    .catch((error) => console.log({ error }));
}

function handleClient(client) {
  client.onMessage((message) => messageHandler(client, message));
}

function messageHandler(client, message) {
  const response = botManager({ phoneNumber: message.from,  message: message.body })
  sendMessage(client, message.from, response)
}

startServer()