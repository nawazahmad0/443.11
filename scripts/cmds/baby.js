module.exports = {
  config: {
    name: "baby",
    aliases: ["chat"],
    version: "1.0",
    author: "MILAN",
    countDown: 5,
    role: 0,
    shortDescription: "Horny AI",
    longDescription: "Horny AI",
    category: "chat",
    guide: {
      en: "{pn} name"
    }
  },
  onStart: async function ({ message, args, api, event }) {
    const axios = require('axios');
    try {
      const text = args.join(' ');
      if (!text) return api.sendMessage(`Say something baka!`, event.threadID, event.messageID);
      const response = await axios.get(`https://milanbhandari.imageapi.repl.co/chatt?text=${text}`);
      api.sendMessage(`${response.data.answer}`, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while processing the message", event.threadID, event.messageID);
    }
  }
};