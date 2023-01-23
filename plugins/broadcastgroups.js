import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? `${htki} *BROADCAST* ${htka}\n` + teks : `${htki} *BROADCAST* ${htka}\n` + teks + '\n' + readMore + '\n\n' + botdate), true).catch(_ => _)
  m.reply('Selesai Broadcast All Group :)')
  let vn = `./mp3/zell.opus`
await conn.sendFile(m.chat, vn, 'araa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: sgc,
    mediaType: 2, 
    description: sgc,
    title: "Join Grup",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/06a28bccfe9ad68939494.jpg')).buffer(),
    sourceUrl: sgc
 	  /*   sourceUrl: sig,
           title: '◄⟬ ●━━━ ⧏ ⧎ ⧐ ━━━● ⟭►',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer()*/
}
     }
    })
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)