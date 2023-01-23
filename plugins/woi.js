import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let jkt = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let mks = moment.tz('Asia/Makassar').format('HH:mm:ss')
let jyp = moment.tz('Asia/Jayapura').format('HH:mm:ss')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let runnya = `〔 *RUNTIME BOT* 〕
 Waktu : ${jkt} WIB | ${mks} WITA | ${jyp} WIT
 Aktif Selama : ${uptime}
 Tag : ${name}`
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, runnya,wm + '\n\n' + botdate, thumbdoc, [['𝙊𝙬𝙣𝙚𝙧','.owner'],['𝙂𝙧𝙤𝙪𝙥 𝘽𝙤𝙩','.gcbot']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `A MIMIR🎧 : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Join Grup`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/1f9dacee73077c49ee96b.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/C0XO2bN0A4VAH2I9P9HPJB'
            }
        }
    })
}


handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
