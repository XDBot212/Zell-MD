import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/05913b2cba97d6f59b452.jpg`
    return conn.sendButton(m.chat, 'Pm Owner aja \n❏ https://wa.me/6285756507257', 'Thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://telegra.ph/file/05913b2cba97d6f59b452.jpg",
                mediaType: "VIDEO",
                title: 'Donasi To V',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(zelldonasi|donasi|zelldonate|donate)$/i


export default handler