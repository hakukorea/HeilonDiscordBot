module.exports = {
    name : "명령어",
    cooldown : 5,
    execute(message) {
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed.setTitle("[HEILON PLANET!]").setColor("#B22222").addField(" !후원 : 후원 오픈채팅방 URL 안내 \r\n\r\n!신고 : !신고 <신고 할 닉네임> \r\n\r\n" , "- HEILON Bot Version 1.0"))
    }
}