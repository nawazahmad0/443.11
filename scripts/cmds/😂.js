module.exports = {
    config: {
        name: "😂",
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
    if (event.body && event.body.toLowerCase() == "😂") return message.reply("𝒃𝒓𝒐  𝒕𝒂 𝒒𝒖𝒐𝒊😎 , 𝒕𝒂 𝒆𝒏𝒗𝒊𝒓𝒆 𝒅𝒆 𝒎𝒐𝒖𝒓𝒊𝒓👿 𝒔𝒊 𝒄'𝒆𝒔𝒕 𝒍𝒆 𝒄𝒂𝒔 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒆 𝒅𝒆 𝒓𝒊𝒓𝒆 😂");
}
};