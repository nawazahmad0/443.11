 module.exports = {
    config: {
        name: "⚽",
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
    if (event.body && event.body.toLowerCase() == "⚽") return message.reply("𝑻𝒖 𝒗𝒆𝒖𝒙 𝒋𝒐𝒖𝒆𝒓 𝒂𝒖 𝒇𝒐𝒐𝒕 ⚽🦶 𝒂𝒗𝒆𝒄 𝒎𝒐𝒊 ⚽🏃 𝑱𝒆 𝒔𝒖𝒊𝒔 𝒇𝒂𝒓𝒐𝒖𝒄𝒉𝒆 𝒆𝒏 𝒇𝒐𝒐𝒕 𝒕𝒖 𝒔𝒂𝒊𝒔 ❗ 😏♨️");
}
};