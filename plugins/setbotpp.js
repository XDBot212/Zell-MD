/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Miaweers
*/
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `Image Not Found`
        conn.updateProfilePicture(bot, img)
        conn.reply(m.chat, 'Successfully changed bot profile photo', m)
    }
}
handler.help = ['setbotpp']
handler.command = /^(setbotpp)$/i
handler.owner = true

export default handler
