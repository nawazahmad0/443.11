module.exports = {
    config: {
        name: "😪",
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
    if (event.body && event.body.toLowerCase() == "😪") return message.reply("𝒃𝒓𝒐🤵 𝒔𝒊 𝒕𝒂 𝒃𝒆𝒔𝒊𝒐𝒏 𝒅𝒆 𝒄𝒐𝒏𝒔𝒐𝒍𝒂𝒕𝒊𝒐𝒏😎 𝒋𝒆 𝒔𝒆𝒓𝒂𝒊 𝒓𝒂𝒗𝒊𝒆 𝒅𝒆 𝒕𝒆 𝒕𝒖é☠️👽💀");
}
};