import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Owner V\nNICKNAME:Owner V\nORG:V\nTITLE:soft\nitem1.TEL;waid=6285756507257:+62 857-5650-7257\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://chat.whatsapp.com/JytIVwVnOCIFQBA93eZEXu\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: virzz23k@gmail.com\nitem3.X-ABLabel:💌 Mail Owner @virzz23k.gmail.com\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 -\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `Hai *@${who.split("@")[0]}*👋 ${ucapan()}, Nih Owner *${global.bn}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator|zellowner)$/i

export default handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Selamat Pagi 🌅"
    }
    if (time > 10) {
        res = "Selamat Siang 🏞️"
    }
    if (time >= 15) {
        res = "Selamat Sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat Malam 🌃" 
    }
    return res
}
