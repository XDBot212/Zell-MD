let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *DOWNLOAD* ${htka}

     WhatsApp GB 🈲
     Pasword: sabar
    
    --------Kelebihan--------
• Pesan anti hapus
• Status Anti hapus
• Anti blokir
• Status Hd
• Sembunyikan Online
• Boom chat
• Anti kadaluarsa
• Pengubah suara Vn
• Status mod variasi
• No delay️
• Status Warna warni
• Dll

  --------Kekurangan--------

• Anti Virtex
• Anti lag
• Fitur war
• Anti Bug troli, slayer Dll
• No Password
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🔗Clone', url: 'https://cararegistrasi.com/QXwAxmu'}},
    {index: 1, urlButton: {displayText: '🔗️Unclone', url: 'https://cararegistrasi.com/aYyZ1Gyt5'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^wagb1$/i
handler.register = true
handler.limit = 10

export default handler