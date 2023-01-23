let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
            「 *Kebijakan* 」
*[❗] Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `VIRTEX`,
	rows: [
	    {title: "Virtex 1", rowId: '.virtex1', description: 'Virtex 1' },
	    {title: "😈Virtex 2", rowId: '.virtex2', description: 'Virtex 2' },
	{title: "😈Virtex 3", rowId: '.virtex3', description: 'Virtex 3' },
	{title: "😈Virtex 4", rowId: '.virtex4', description: 'Virtex 4' },
	{title: "😈Virtex 5", rowId: '.virtex5', description: 'Virtex 5' },
	{title: "😈Virtex 6", rowId: '.virtex6', description: 'Virtex 6' },
    {title: "😈Virtex 7", rowId: '.virtex7', description: 'Virtex 7' },
	{title: "😈Virtex 8", rowId: '.virtex8', description: 'Virtex 8' },
	{title: "😈Virtex 9", rowId: '.virtex9', description: 'Virtex 9' },
	{title: "😈Virtex 10", rowId: '.virtex10', description: 'Virtex 10' },
/*	{title: "😈Virtex 11", rowId: '.virtex11', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },
	{title: "😈Virtex 12", rowId: '.virtex12', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },
	{title: "😈Virtex 13", rowId: '.virtex13', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },
	{title: "😈Virtex 14", rowId: '.virtex14', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },
    {title: "😈Virtex 15", rowId: '.virtex15', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },
	{title: "😈Virtex 16", rowId: '.virtex16', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },
	{title: "😈Virtex 17", rowId: '.virtex17', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },
	{title: "😈Virtex 18", rowId: '.virtex18', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },
	{title: "😈Virtex 19", rowId: '.virtex19', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },
    {title: "😈Virtex 20", rowId: '.virtex20', description: 'Jangan lupa Subs Yt ᴹᴿ᭄ King Of Bear ×፝֟͜× Offcial' },*/

	]
    }, {
    title: `INFO`,
	rows: [
	    {title: "Download WhatsApp Immune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "Virus Troli", rowId: '.virustroli', description: 'Troli' },
	    {title: "Virus Power", rowId: '.powerlist', description: 'Power' },
	    ]
        }, {
    title: `BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "GASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = true

export default handler
