const wppconnect = require( "@wppconnect-team/wppconnect");

export const createServer = async () => {

  const options = { session: "whatsbot", autoClose: true };
  return wppconnect.create(options);
};

export default {
    createServer
}