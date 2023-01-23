let handler = async (m) => {
    let user = db.data.users[m.sender]
    let botol = global.wm
    let who = m.mentionedJid && m.mentionenJid ? m.mentionedJid : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [m.sender]
    let username = conn.getName(who)
    let zell = `*▸ Cek Warn* ${username} *:* _${user.warning} / 100_
`.trim()
    conn.sendButton(m.chat, zell, `${botol}`, [[`—‹ Hapus 1 Warn ›—`, `.maaf`]], m)
    conn.reply(zell)
}
handler.help = [`cekkwarn (harus menggunakan dua "k"!)`]
handler.tag = [`fun`, `cek`]
handler.command = /^(cekkwarn)$/i

export default handler 
