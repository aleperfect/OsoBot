let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:ACTIVENSE MUERTOS ‼️* ${pesan}`
let teks = `*𝐒𝐞 𝐯𝐞𝐧𝐝𝐞 𝐛𝐨𝐭 𝐝𝐞 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐡𝐭𝐭𝐩𝐬://𝐰𝐚.𝐦𝐞/𝟓𝟏𝟗𝟐𝟏𝟒𝟗𝟔𝟕𝟓𝟗 ⭐*\n\n🟩 ${oi}\n\n🟩 *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┊🍁 @${mem.id.split('@')[0]}\n`}
teks += `👤𝗢𝘀𝗼 𝗕𝗼𝘁`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler