module.exports = {
    config: {
        name: "hi",
        version: "1.0",
        author: "Jaychris Garcia",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "hi") return message.reply("Les faibles ne peuvent pas comprendre les besoins du roi Akashi. J'accepte de vous aider cette fois que puis-je pour vous ?");
}
};