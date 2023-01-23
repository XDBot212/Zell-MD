let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Online in this group* ')
}

handler.tags = ['main']
handler.command = /^(zellmdon)$/i

handler.admin = true

export default handler