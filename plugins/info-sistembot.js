let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Sistem Bot
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Running On Repl.it*', 'status@broadcast')
}
handler.help = ['botrunning']
handler.tags = ['info']
handler.command = /^(botrun|botrunning)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 