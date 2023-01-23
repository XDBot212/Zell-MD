import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, isAdmin, isOwner, text }) => {
	if (m.isGroup) {
		switch (text) {
			case 'off': {
				global.db.data.chats[m.chat].isBanned = true
				conn.reply(m.chat, 'S u c c e s', m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Bot have been turned off for this group', sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
				break
			case 'on': {
				global.db.data.chats[m.chat].isBanned = false
				conn.reply(m.chat, 'Ｓｕｋｓｅｓ', m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Bot has been enabled for this group', sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
				break
			default: {
				conn.sendButton(m.chat, '_Choose a options_', 'This option is to enable/disable the bot', 2, ['ON', '.bot on', 'OFF', '.bot off'], m)
			}
				break
		}
	} else conn.sendButton(m.chat, `Type ${usedPrefix}menu`, '', 1, ['Menu', `${usedPrefix}menu`], m)
}
handler.help = ['bot [on/off]']
handler.tags = ['group']
handler.command = /^(bot)$/i

handler.admin = true

export default handler