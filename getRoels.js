module.exports = {
    name : "역할",
    execute(message) {
        message.member.roles.add('788119328385531934')
        message.member.setNickname(`[HEILON] ${message.member.user.username}`)
        message.reply("성공적으로 역할을 지급하였습니다.")
    }
}
