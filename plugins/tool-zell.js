let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*––––––––––✦ . . . ✦––––––––––*\n*Hallo! Zell-MD Online* \n *Gimana Kabar Nya?*', 'status@broadcast')
}
handler.customPrefix = /^(Hallo Zell|Hello Zell|Hlo Zell|hi Zell|Hai Zell)$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 
