export async function all(m) {
let zsetting = db.data.settings[this.user.jid]
	if (new Date() * 1 - zsetting.status > 1000) {
		let _zuptime = process.uptime() * 1000
		let zuptime = clockString(_zuptime);
		let zellwm = 'Repl.it'
		let bio = `🕒️Active during ${zuptime} | 🔄Mode: ${global.opts['self'] ? 'Private' : zsetting.self ? 'Private' : global.opts['gconly'] ? 'Only Group' : 'Public'} | 🔌Running Powered by ${zellwm}`

		await this.setBio(bio).catch(_ => _)
		zsetting.status = new Date() * 1
	}
}

function clockString(ms) {
	let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
	let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
	let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

// Created by Zell