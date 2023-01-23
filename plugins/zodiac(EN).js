let handler = (m, { usedPrefix, command, text }) => {
    if (!text) throw `Example:\n${usedPrefix + command} 2002 02 25`

    const date = new Date(text)
    if (date == 'Invalid Date') throw date
    const d = new Date()
    const [year, month, dates] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [year + (+ new Date(1970, month - 1, dates) > + new Date(1970, birth[1] - 1, birth[2])), ...birth.slice(1)]
    const checkage = month === birth[1] && dates === birth[2] ? `Happy birthday to-${age} years!:)` : age

    const teks = `
Born : ${birth.join('-')}
Upcoming birthday : ${birthday.join('-')}
Age : ${checkage}
Zodiac : ${zodiac}
`.trim()
    m.reply(teks)
}
handler.help = ['zodiac *2002 02 25*']
handler.tags = ['tools']

handler.command = /^zodiac$/i

export default handler 

const zodiak = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarius", new Date(1970, 0, 20)],
    ["Pisces", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Gemini", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpio", new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}