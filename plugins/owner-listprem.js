let handler = async (m, { conn, args }) => {
  let user = Object.entries(global.db.data.users).filter(user => user[1].premiumTime).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let name = '๐ Premium'
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let premTime = global.db.data.users[m.sender].premiumTime
  let prem = global.db.data.users[m.sender].premium
  let waktu = clockString(`${premTime - new Date() * 1} `)
  let sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
  await conn.sendButton(m.chat, `${htki} *PREMIUM* ${htka}
โโฆ *Premium Time:*
โโข *Name:* ${conn.getName(m.sender)}
${prem ? `${clockString ('premiumTime' - new Date() * 1)}` : 'โโข *PremiumTime:* Expired ๐ซ'}
โโโโโโโโโโโโเน

โขยทโโโโโโโโโโโโโโโโโโโโโยทโข
${sortedP.slice(0, len).map(({ jid, name, premiumTime, registered }, i) => `\n\nโโฆ ${registered ? name : conn.getName(jid)}\nโโข wa.me/${jid.split`@`[0]}\n${premiumTime > 0 ? `${clockString (premiumTime - new Date() * 1)}` : 'โ *EXPIRED ๐ซ*'}`).join`\nโโโโโโโโโโโโเน`}
โโโโโโโโโโโโเน`.trim(), wm, null, [[`${prem ? 'โฆ Owner โฆ': 'โฆ Buy Premium โฆ'}`, `${prem ? '.owner nomor': '.buyprem'}`]], fkon)
setTimeout(() => {
    if (db.data.chats[m.chat].deletemedia) conn.deleteMessage(m.chat, key)
  }, db.data.chats[m.chat].deletemediaTime)
}
handler.help = ['premlist [angka]']
handler.tags = ['info']
handler.command = /^(listprem|premlist)$/i

export default handler

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['โ ', ye, ' *Years ๐๏ธ*\n', 'โ ', mo, ' *Month ๐*\n', 'โ ', d, ' *Days โ๏ธ*\n', 'โ ', h, ' *Hours ๐*\n', 'โ ', m, ' *Minute โฐ*\n', 'โ ', s, ' *Second โฑ๏ธ*'].map(v => v.toString().padStart(2, 0)).join('')
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}