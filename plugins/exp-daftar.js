import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘⎙",
	rows: [
	    {title: "𝗥𝗔𝗡𝗗𝗢𝗠 𝗬𝗘𝗔𝗥𝗦", rowId: '.daftar ' + namae + '.' + pickRandom(['25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "𝗢 𝗟 𝗗",
	rows: [
	    {title: "25 Years", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 Years", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 Years", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 Years", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 Years", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "𝗬 𝗢 𝗨 𝗡 𝗚",
	rows: [
	    {title: "20 Years", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 Years", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Years", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 Years", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 Years", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 Years", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 Years", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 Years", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 Years", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 Years", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 Years", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 Years", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `┏❏═┅═━–〈 𝗖𝗵𝗼𝗼𝘀𝗲 𝘆𝗼𝘂𝗿 𝗮𝗴𝗲`,
  footer: `┊» *𝖸𝗈𝗎𝗋 𝗇𝖺𝗆𝖾:* ${conn.getName(m.sender)}\n<>𝖳𝗒𝗉𝖾 ${usedPrefix + command} *𝗒𝗈𝗎𝗋𝗇𝖺𝗆𝖾.𝗒𝗈𝗎𝗋𝖺𝗀𝖾* 𝗂𝖿 𝗒𝗈𝗎 𝗐𝖺𝗇'𝗍 𝖼𝗎𝗌𝗍𝗈𝗆 𝗇𝖺𝗆𝖾.`,
  title: "▢- - - - - 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗘 𝗥 - - - - -",
  buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘⎙",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] You already registered\n Want to re-register? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Name cannot be empty (Alphanumeric)'
  if (!age) throw 'Age cannot be empty (Angka)'
  age = parseInt(age)
  if (age > 25) throw 'Exceeding the maximum age limit!'
  if (age < 5) throw 'Age past the minimum age!'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
┏❏═┅═━–〈 *𝖴 𝗌 𝖾 𝗋 𝗌*
│» *S𝗍𝖺𝗍𝗎𝗌:* 𝖲𝗎𝖼𝖼𝖾𝗌 𝖱𝖾𝗀𝗂𝗌𝗍𝖾𝗋𝖾𝖽
│» *𝖭𝖺𝗆𝖾:* ${name}
│» *𝖠𝗀𝖾:* ${age} 𝖸𝖾𝖺𝗋𝗌
│» *𝖲𝖭:* ${sn}
┗────··
*Your data will be stored in the database and safe without being shared!*
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗘 𝗥 - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/85e408a94070ddf540e70.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.zellmenu','buttonText':{'displayText':'「  𝗠 𝗘 𝗡 𝗨 」'},'type':1},
{'buttonId':'.zelldonate','buttonText':{'displayText':'「 𝗗 𝗢 𝗡 𝗔 𝗧 𝗘 」'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|zellreg|zellregister|verify|reg(ister)?)$/i

export default handler