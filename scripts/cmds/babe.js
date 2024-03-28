module.exports = {
	config: {
		name: "babe",
		aliases: ["beb"],
		version: "1.0",
		author: "Otineyyyy your dadddy👾😉",
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of football players",
		longDescription: "",
		category: "love",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [
     "https://i.imgur.com/swwCSIK.jpg",

"https://i.imgur.com/nLyXqkY.jpg",

"https://i.imgur.com/npMaYoQ.jpg",

"https://i.imgur.com/zBL5MV5.jpg",

"https://i.imgur.com/4DcYon9.jpg",

"https://i.imgur.com/9OajIuZ.jpg",

"https://i.imgur.com/AEJjZ2p.jpg",

"https://i.imgur.com/9JcjNe9.jpg",

"https://i.imgur.com/yxCwrXM.jpg",

"https://i.imgur.com/SZ1iaRW.jpg",

"https://i.imgur.com/XKIjpwT.jpg",

"https://i.imgur.com/4V0lHJ2.jpg",

"https://i.imgur.com/3cPpTrY.jpg"
] 

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: "Nemo's Baby😘",attachment: await global.utils.getStreamFromURL(img)
})
}
     }