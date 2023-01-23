let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *DOWNLOAD* ${htka}

           WhatsApp Immune
    
┏❏═┅═━–〈 *Kelebihan*
┊» Anti Virtex
┊» Anti lag
┊» Fitur war
┊» Anti Bug troli, slayer Dll
┊» Anti kadaluarsa
┊» Instantik
┊» Anti hapus pesan
┊» Unclone Version
┊» Broadcast 
┊» Kebal All virus
┊» Mode pesawat
┗––––––––––✦
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🔗Linknya', url: 'https://cararegistrasi.com/TyMuTxZ'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^waimune2$/i

export default handler
