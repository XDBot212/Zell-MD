import { createHash } from 'crypto'
let handler = async function (m, { args }) {
  if (!args[0]) throw '๐ฎSerial Number kosong'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '๐ซSerial Number salah'
  user.registered = false
  m.reply(`โโโโโโโโฉ *Unregister*
โยป Berhasil keluar dari database, Terimakasih! 
โโโโโโโโโโโโฆ`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler
