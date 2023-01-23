let handler = async (m, { conn }) => {
const srl = 'https://replit.com:/@virzz23k/Zell-MD-Rules?s=app'
let info = `
*${htki} RULES BOT ${htka}*
`
const sections = [
   {
	title: `*Rules Zell-MD*`,
	rows: [
	    {title: '📄 Zell Rules', description: "Rules Bot Zell", rowId:".zellr"}
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
conn.sendHydrated(m.chat, info, wm, null, srl, "🌎 Rules", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler