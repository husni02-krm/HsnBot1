
import { createCanvas, loadImage } from 'canvas'
import { writeFileSync, unlinkSync } from 'fs'
import chalk from 'chalk'
console.log(chalk.magenta('[HsnBot] Brat command loaded'))

export default async function bratCommand(m, sock, text) {
  if (!text) return m.reply('Teksnya mana? Contoh: .brat Aku ganteng')

  const canvas = createCanvas(512, 512)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, 512, 512)
  ctx.fillStyle = '#000'
  ctx.font = 'bold 40px Sans'
  ctx.fillText(text, 50, 256)

  const buffer = canvas.toBuffer('image/png')
  const tempPath = '/tmp/brat_text.png'
  writeFileSync(tempPath, buffer)

  await sock.sendImageAsSticker(m.chat, tempPath, m)
  unlinkSync(tempPath)
}
