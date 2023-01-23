import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('Oktober 7 2023 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let audio = `./mp3/zell.opus`
  conn.sendButton(m.chat, `
┏❏═┅═━–〈 *Payment | Dana*
┊» Gopay  [085756507257]
┊» Dana  [085756507257]
┊» Saweria  [https://saweria.com/VirzzX]
┗––––––––––✦

┏❏═┅═━–〈 *Donasi,,,,*
┊» Ingin donasi? wa.me/6285756507257
┊» Hasil donasi akan digunakan untuk membeli Panel/RDP
┗––––––––––✦
`.trim(), wm, [[`Owner`, `.owner`, `Menu`, `.zellmenu`]],m) //
conn.sendFile(m.chat, audio, './mp3/zell.ppus', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `Thanks`, sourceUrl: 'https://wa.me/6285756507257', thumbnail: await (await fetch('https://telegra.ph/file/07a3a291d1aff594d49fe.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler