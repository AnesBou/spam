const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608708507805417493")
setInterval(function() {
channel.send(`السبام اك فاهم نعيشو غاية ه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);