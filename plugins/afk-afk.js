let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`❏═┅═━–〈 AFK Mode
┊ *${conn.getName(m.sender)}* Now AFK ${text ? ': ' + text : ''}
┗––––––––––✦`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler