import { webp2png } from '../lib/webp2mp4.js'
import { URL_REGEX } from '@adiwajshing/baileys'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Picture not found!'
        await conn.updateProfilePicture(m.chat, img)
        m.reply('[❗] Succes change group picture!')
    } else throw `Send/reply image with command *${usedPrefix + command}*`
}
handler.help = ['setpp']
handler.tags = ['group']

handler.command = /^setppgc|changegcpp|sppgc$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler