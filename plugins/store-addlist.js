const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw `Balas pesan dengan perintah *${usedPrefix + command}*`;
	if (!text) throw `Penggunaan: ${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} Zell`;
	let msgs = db.data.msgs
	if (text in msgs) throw `'${text}' telah terdaftar di List Store`
	msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
	m.reply(`Berhasil menambahkan ${text} ke List Store, akses dengan mengetik ${usedPrefix}liststore`.trim())
}
handler.help = ['list'].map(v => 'add' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^addlist$/i

handler.group = true
handler.admin = true

export default handler