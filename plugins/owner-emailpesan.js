// yg ada kata "zell" itu buatan Zell-MD
let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `.`

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let zell = `${who.split("@")[0]}`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya, Contoh:\n.email 6285756507257.Halo', m)
    if (text > 500) return conn.reply(m.chat, 'Teks terlalu panjang! Maksimal 500 teks.', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 📧 EMAIL 」*\n\n📫Dari : wa.me/${zell}\n💬Pesan : ${pesan}\n\n *${global.wm}*`

    conn.reply(korban + '@s.whatsapp.net', spam1, m)

    let logs = `[❗] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['email']
handler.tags = ['owner']

handler.command = /^(email)$/i
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
