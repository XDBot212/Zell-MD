import { createHash } from 'crypto'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let zell = `*BIG THANKS TO*
    
Terimakasih Kepada::
➸ @${'6285756507257'.split('@')[0]}

Terimakasih Kepada:
➸ 0@s.whatsapp.net (sebagai Developer Aplikasi WhatsApp)

─────────────────────
»• God
»• My ortu
»• Virzz (Me(Owner Of Zell-MD))
»• King Of Bear
»• Nurutomo
»• Adiwajshing
»• Ariffb
»• Amel
»• IrwanX
»• Dawnfrosty
»• Rteam1
»• Beniismael
»• Raditya 
»• AlyaaXzy 
»• Haori 
»• David
»• Rozi
»• Letta
»• Yanzz
»• Furqan
»• Elyas
»• Rasel
»• Xteam
»• Khael
»• Atenabot
»• Baka Botz
»• ZeeoneOfc
»• Zeks
»• Rendycraft  
»• Krizynofc
»• Nadin
»• NexEp
»• Jarot
»• Tio
»• Aca Mirabel
»• Ramdani
»• Penyedia Layanan API
»• Orang-orang yang Berdonasi
─────────────────────`
  let buttonMessage= {
'document':{'url':'https://youtu.be/dd2FWLD6H9Q'},
'mimetype':global.ddocx,
'fileName':'Zell-MD',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://chat.whatsapp.com/C0XO2bN0A4VAH2I9P9HPJB',
'mediaType':2,
'previewType':'pdf',
'title':`${ucapan()} | Click to Join Zell Group`,
'body':`${ucapan()} | Click to Join Zell Group`,
'thumbnail':await(await fetch('https://telegra.ph/file/5859badf62ed11c99db20.jpg')).buffer(),
'sourceUrl':'https://chat.whatsapp.com/C0XO2bN0A4VAH2I9P9HPJB'}},
'caption':zell,
'footer':`Ini Ucapan Terima Kasih Untuk Orang Yang Telah Berpatisipasi

${botdate}`,
'buttons':[
{'buttonId':'.zellmenu','buttonText':{'displayText':'「 𝗠 𝗘 𝗡 𝗨 」'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'「 𝗛 𝗘 𝗟 𝗟 𝗢 」'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
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
