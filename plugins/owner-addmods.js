let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `Tag orangnya!`
    if (global.mods.includes(who.split`@`[0])) throw 'Dia udah Mods!'
    global.mods.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} sekarang Mods!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addmods [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+) mods$/i

handler.owner = true

export default handler