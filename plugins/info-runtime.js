import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
	let _muptime
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let name = conn.getName(who)
	let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, `${htki} R u n t i m e ${htka}\n\n*Hello @${who.split("@")[0]}👋! ${ucapan()}*\n\n${muptime}`,wm + '\n\n' + botdate, giflogo2, [['M e n u','.co', 'O w n e r', '.zellowner']], m, { /*Sedikit info, kalau mau lebih fast respon ,silahkan ganti "thumbv" menjadi "giflogo2"*/
contextInfo: { externalAdReply :{
                        mediaUrl: global.thumbv,
                        mediaType: 2,
                        description: `${ucapan()}👋 | Click To Join Zell Group`,
                        title: `${ucapan()}👋 | Click To Join Zell Group`,
                        body: `${ucapan()}👋 | Click To Join Zell Group`,          previewType: 0,
                        thumbnail: await (await fetch(pp)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/C0XO2bN0A4VAH2I9P9HPJB'
                      }}
})
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt', 'zellruntime']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
   let res = "Good Earlydays 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃" 
    }
    return res
}
