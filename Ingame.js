module.exports = {
    name : "동접",
    cooldown : 5,
    execute(message) {
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()

        message.reply(Embed.setTitle("[MapleStory BOT Test]").setColor("#FFFFF").addField("현재 서버에 0명이 접속 중 입니다." , "Dev - Dcaprio"))
    }   
    
}

