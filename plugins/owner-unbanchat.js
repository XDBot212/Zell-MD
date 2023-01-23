let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(`┏❏═┅═━–〈 *Unban Chat*
┊Bot akan merespon dichat ini!
┗––––––––––✦`)
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^(unbanchat|ubnc|zubnc)$/i
handler.owner = true

export default handler