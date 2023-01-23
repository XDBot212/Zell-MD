import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗] Masukkan nama lagu yang ingin diputar.\nContoh:\n\n*#play.1 As It Was - Harry Styles*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*${global.wait}*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'AUDIO',
body: 'Zell-MD',         
previewType: 0, thumbnail: await (await fetch(`https://telegra.ph/file/05913b2cba97d6f59b452.jpg`)).buffer(),
sourceUrl: `https://github.com/XDBot212`}}})
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_${global.wait}*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'VIDEO',
body: 'Zell-MD',         
previewType: 0, thumbnail: await (await fetch('https://telegra.ph/file/05913b2cba97d6f59b452.jpg')).buffer(),
sourceUrl: `https://youtu.be/pwLZpdfO8AU`}}})
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `This`, m)}
}catch(e){
m.reply('*[❗] Lagu tidak ditemukan!*')
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']

export default handler
