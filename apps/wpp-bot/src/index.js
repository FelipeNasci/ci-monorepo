const wppconnect = require("@wppconnect-team/wppconnect");

const menuMessage = `Olá, bem-vindo.
Com qual setor você gostaria de falar?
1. Assessoria Administrativa
2. Gerência de TI
3. Subprefeitura
`;

const services = {
  1: "Assessoria Administrativa",
  2: "Gerência de TI",
  3: "Subprefeitura",
};

const options = { session: "whatsbot", autoClose: false };

wppconnect
  .create(options)
  .then((client) => start(client))
  .catch((error) => console.log({ error }));

function start(client) {
  client.onMessage((message) => stages(client, message));
}

function sendMessage(client, sendTo, text) {

  client
    .sendText(sendTo, text)
    .then((result) => {})
    .catch((erro) => {
      console.error("ERRO: ", erro);
    });
}
const userStages = new Map();

// const client = {};
// const message = {
//   from: "558387673043@c.us",
//   body: "2",
// };

// userStages.set(message.from, {
//   service: "2",
//   stage: "MENU",
// });

function stages(client, message) {
  const user = userStages.get(message.from);

  if (!user) {
    sendMessage(client, message.from, menuMessage);
    userStages.set(message.from, { stage: "MENU" });
    return;
  }

  const choice = message.body;
  sendMessage(client, message.from, `Entendi, ${services[choice]}`);
  // userStages.set(message.from, { stage: services[choice] });
  userStages.delete(message.from);
}

// stages(client, message);
