const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
import { format } from 'util';

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

export async function all(m) {
	if (m.fromMe && m.isBaileys) return !0
	let text;
	let zsetting = global.db.data.settings[this.user.jid]
	if(!zsetting.anticall) return 
	let zgc = sgc
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
		await this.reply(m.chat, `Maaf, kamu diblokir oleh bot karena telah melanggar aturan bot. Silahkan lapor ke owner jika tidak sengaja melakukan telpon.\n\n*[❗] Dilarang menelpon bot, chat owner apabila melakukan tanpa sengaja atau join ke grup *_${zgc}_* untuk selengkapnya.*`, null)
		await delay(1000)
		await this.reply(m.chat, '```L o a d i n g```\n\nto *Blocked*', null)
		await delay(1000)
		await this.reply(m.chat, '*3*', null)
		await delay(1000)
		await this.reply(m.chat, '*2*', null)
		await delay(1000)
		await this.reply(m.chat, '*1*', null)
		await delay(1000)
		await this.reply(m.chat, '*Kamu Diblokir*', null)
		await this.updateBlockStatus(m.chat, "block")

	}
}
