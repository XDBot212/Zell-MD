let handler = async (m, { conn }) => {
let info = `
*${htki} Immune ${htka}*
          
 
          
                  
 *「 Immune 」*
*[❗] Download Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `INFO`,
	rows: [
	    {title: "WhatsApp Immune 1", rowId: '.waimune1', description: 'Versi 1' },
	    {title: "WhatsApp Immune 2", rowId: '.waimune2', description: 'Versi 2' },
	{title: "WhatsApp GB Kebal 1", rowId: '.wagb1', description: 'GB Versi 1' },
	{title: "WhatsApp GB Kebal 2", rowId: '.wagb2', description: 'GB Versi 2' },
	]
    }, {
    title: `BUY`,
	rows: [
	    {title: "V", rowId: '.owner', description: 'Pembuat Bot' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📛Download",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['waantivirus']
handler.tags = ['virus']
handler.command = /^waantivirus$/i
handler.premium = false

export default handler
