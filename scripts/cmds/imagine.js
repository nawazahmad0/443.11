const axios = require('axios');
module.exports = {
 config: {
 name: "imagine",
 aliases: ["gen"],
 version: "1.1",
 author: "JARiF × Ohio03",
 countDown: 1,
 role: 0,
 shortDescription: {
 en: 'Text to Image'
 },
 longDescription: {
 en: "Text to image"
 },
 category: "image-anime",
 guide: {
 en: ' {pn} Your Prompt | Model' +
 '\del 』\alog-diffusion-1.0\ythingv3_0\ything-v4.5\ything-V5\M3A3_Orangemix\liberate_v2\eamlike-diffusion-1.0\eamlike-diffusion-2.0\eamshaper_5BakedVae\eamshaper_6BakedVae\eamshaper_7\ldreths-vivid-mix\riel_v15\riel_v16\chamix_v10\inamix_meinaV9\enjourney_V4\rtrait+1.0\rtraitPlus_V1.0\alistic_Vision_V1.4\alistic_Vision_V2.0\alistic_Vision_V4.0\vAnimated_v122\ffusion-Model-V1\v1_4\-5\oninsBeautiful_v10\eallys-mix-ii\meless-1.0\misAnimeDiffusion_V1\inamix_v11'

 
 }
 },

 onStart: async function({ message, args }) {
 const text = args.join(" ");
 if (!text) {
 return message.reply("❌ | L'échecs n'est pas dans mon vocabulaire alors revoir ton prompt");
 }

 let prompt, model;
 if (text.includes("|")) {
 const [promptText, modelText] = text.split("|").map((str) => str.trim());
 prompt = promptText;
 model = modelText;
 } else {
 prompt = text;
 model = 20; // Set the default model number to 1
 }

 message.reply("Je suis  joueur qui redéfinir les limites du terrain,please wait...⏳").then((info) => { id = info.messageID });
 try {
 const API = `https://aliestercrowley.com/api/crowgen.php?model=${model}&prompt=${encodeURIComponent(prompt)}=${prompt}`;
 const imageStream = await global.utils.getStreamFromURL(API);

 return message.reply({
 attachment: imageStream
 });
 } catch (error) {
 console.log(error);
 message.reply("Sur le terrain je suis capable de tout, pour l'instant je vous fais la grâce de ne pas vous envoyer l'image !!").then(() => {
 message.delete(id);
 });
 }
 }
};