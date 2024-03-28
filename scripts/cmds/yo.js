module.exports = {
    config: {
        name: "Yo",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "yo") return message.reply("𝑶𝒖𝒊 𝒃𝒓𝒐 𝒄'𝒆𝒔𝒕 𝒒𝒖𝒆𝒍 𝒑𝒍𝒂𝒏 ❗💀♨️?");
}
};