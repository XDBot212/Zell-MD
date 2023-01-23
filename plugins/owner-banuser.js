let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa yang mau dibanned?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag?'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `┏❏═┅═━–〈 *Banned User*
┊User terbanned!
┗––––––––––✦`, m)
m.reply('Kamu telah di Banned!!', mention)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(ned)?$/i
handler.owner = true

export default handler
