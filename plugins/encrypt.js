import JavaScriptObfuscator from 'javascript-obfuscator'

let handler = async (m, { conn, text }) => {
if (!text) throw `[!] Masukan textnya`
let res = JavaScriptObfuscator.obfuscate(text)
conn.reply(m.chat, res.getObfuscatedCode(), m)
m.reply(`[❗] Apabila terjadi error, maklumkan saja, karena fitur ini masih dalam pengembangan:)`)
}
handler.help = ['encrypt']
handler.tags = ['tools']
handler.command = /^enc(rypt)?$/i

handler.mods = true 
handler.owner = true

export default handler