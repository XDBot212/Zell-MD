let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Offline in this group* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['zellmd(on/off)']
handler.tags = ['main']
handler.command = /^(zellmdoff)$/i

handler.admin = true

export default handler