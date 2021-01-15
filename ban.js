module.exports = {
    name : '영구추방',
    execute (message) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("권한이 없습니다.")
        let User = message.mentions.members.first()
        if(!User) return message.reply("사용자를 찾을 수 없습니다.")
        if(User.hasPermission("BAN_MEMBERS")) return message.reply("관리자는 추방 할 수 없습니다.")
        User.ban()
        message.reply("[ADMINISTRATOR] 밴 완료")
    }
}