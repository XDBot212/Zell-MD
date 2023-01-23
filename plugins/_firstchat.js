import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       
    let zellgetname = await conn.getName(m.sender)
   /* let zellget = `${who.split("@")[0]}` not used*/
    let zgc = sgc
    let zuser = global.db.data.users[m.sender]
    let ztxt = `Hai *${zellgetname}* 👋, ${zellhari()}

${zuser.banned ? `[❗] Maaf, kamu dibanned! Kamu tidak bisa menggunakan bot selama kamu dibanned, silahkan chat owner untuk laporan apabila tidak sengaja membuat user terblokir atau join grup *_${zgc}_* untuk melaporkan.` : `[💬] Ada yang bisa *${global.bn}* bantu?`}`.trim()

    if (new Date() - zuser.pc < 21600000) return // Default time 21600000 (6 hours)
    await this.sendButton(m.chat, ztxt, zuser.banned ? wm : '[❗] Note: Jangan spam bot agar menghindari delay pada respon bot!', [zuser.banned ? '「 𝗢 𝗪 𝗡 𝗘 𝗥 」' : '「  𝗠 𝗘 𝗡 𝗨 」', zuser.banned ? '.zellowner' : '.zellmenu'], m)
    zuser.pc = new Date * 1
}

//
function zellhari() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Good Earlydays🌆"
    if (time >= 4) {
        res = "Good Morning 🌄"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Night 🌃"
    }
    return res
}


// made by Zell