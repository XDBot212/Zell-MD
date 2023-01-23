let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['Di neraka','Di surga','Di mars','Di tengah laut','Di dada :v','Di hatimu >///<'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['dimanakah <pertanyaan>']
handler.tags = ['kerang']
handler.customPrefix = /^dimanakah|dimana$/i
handler.command = new RegExp
handler.owner = false

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
