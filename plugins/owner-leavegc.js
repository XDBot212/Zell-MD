let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('[❗] Bot keluar dari grup ini!', m.chat) 
        await conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leavegc)$/i

handler.rowner = true

export default handler