const axios = require("axios");

module.exports = {
  config: {
    name: "teach",
    aliases: ["simteach"],
    version: "1.0",
    author: "",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "teach sim",
    },
    longDescription: {
      en: "teach sim",
    },
    category: "box chat",
    guide: {
      en: "{p}teach your ask | my answer ",
    },
  },
  onStart: async function ({ api, event, args }) {
    const { messageID, threadID, senderID, body } = event;
    const tid = threadID,
      mid = messageID;
    const content = args.join(" ").split("|").map((item) => item.trim());
    const ask = content[0];
    const ans = content[1];
    if (!args[0])
      return api.sendMessage(
        "Use /teach your ask | sim respond",
        tid,
        mid
      );
    try {
      const res = await axios.get(
        `https://sim.ainz-project.repl.co/teach?ask=${ask}&ans=${ans}`
      );
      api.sendMessage(
        `Thank you for teaching sim!\Your ask: ${ask}\Your respond: ${ans}`,
        tid,
        mid
      );
    } catch (error) {
      console.log(error);
      api.sendMessage(
        "Sorry, something went wrong. Please try again later.",
        tid,
        mid
      );
    }
  },
};