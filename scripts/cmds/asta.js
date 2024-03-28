const fs = require('fs');

module.exports = {
  config: {
    name: "asta",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61551024657202"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("-Bro on ne t'a pas  appris de ne pas fouiller dans le fut privé des autres ? 
Seule le boss ʚʆɞ Stãñlęÿ Stäwã ʚʆɞ peux l'utiliser", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("veuillez saisir le nom du fichier 😉.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`Fichier introuvable 😪: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};