
import chalk from 'chalk'
console.log(chalk.yellow('[HsnBot] Menu command loaded'))

// Simulated menu handler
export default async function menuCommand(m, sock) {
  const text = '*HsnBot Menu*\n1. .stiker\n2. .ocr\n3. .balikin\n4. .brat <teks>\n5. .anime\n6. .ytmp3\n7. .rpg'
  const profilePicture = 'https://telegra.ph/file/4ea8bdce3ff67405e39e4.jpg'

  await sock.sendMessage(m.chat, {
    image: { url: profilePicture },
    caption: text,
    buttons: [{ buttonId: '.owner', buttonText: { displayText: 'Owner' }, type: 1 }],
    footer: 'HsnBot by 6283842301451'
  }, { quoted: m })
}
