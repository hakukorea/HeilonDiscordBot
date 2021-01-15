module.exports = {
    name : "후원",
    cooldown : 5,
    execute(message) {
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed.setTitle("[DONATION COMMAND]").setColor("#B22222").addField("https://open.kakao.com/o/sHAzQNLc" , "- HEILON Bot Version 1.0"))
    }
}