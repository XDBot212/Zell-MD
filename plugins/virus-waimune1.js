let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *DOWNLOAD* ${htka}

           WhatsApp immune ♨️
    
┏❏═┅═━–〈 *Kelebihan*
┊» Anti Virtex
┊» Anti lag
┊» Fitur war
┊» Anti Bug troli, slayer Dll
┊» No Password
┗––––––––––✦`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🔗️Linknya', url: 'https://cararegistrasi.com/cMyXZwsK'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^waimune1$/i

export default handler
