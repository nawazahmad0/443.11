module.exports = {
    config: {
        name: "ok",
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
    if (event.body && event.body.toLowerCase() == "ok") return message.reply("𝑶𝒏 𝒆𝒔𝒕 𝒅'𝒂𝒄𝒄𝒐𝒓𝒅 𝒒𝒖𝒆ʚʆɞStãñlęÿʚʆɞ𝑬𝒔𝒕 𝒖𝒏 𝑩ø𝒔𝒔 𝒅𝒆 𝒍𝒂 𝒔𝒄𝒊𝒆𝒏𝒄𝒆 🧪 𝒆𝒕 𝒅𝒆 𝒍𝒂 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒊𝒆 🦾🧑‍💻 𝑯𝒆𝒊𝒏 😏 🤖");
}
};