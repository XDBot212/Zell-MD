
let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya, Contoh:\n.email 6285756507257|Halo', m)
    if (text > 500) return conn.reply(m.chat, 'Teks terlalu panjang! Maksimal 500 teks.', m)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    
    let user = global.db.data.users[m.sender]
    let zell1 = `${who.split("@")[0]}`
    let zell2 = `${number}`
    var nomor = m.sender
    let spam1 = `*「 Halo Owner 」*\n\nAda yang mau sewa nih\n\nDari : wa.me/${zell1}\n\n*${global.wm}*`

    conn.reply(zell2 + '@s.whatsapp.net', spam1, m)

    let logs = `[❗] Terimakasih! Silahkan tunggu balasan respon owner! Pesan akan masuk dari bot!`
    conn.reply(m.chat, logs, m)
}
handler.help = ['email']
handler.tags = ['owner']

handler.command = /^(zellsewa)$/i
handler.rowner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 
