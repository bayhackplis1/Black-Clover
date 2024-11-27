import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +523218138672
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['5215544876071', 'Creador 👑', true],
   ['595985547825', 'Owner 🍭', true],
   ['525544876071'],
   ['523142183828'],
   ['']
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.5'
global.vs = '2.0.7'
global.vsJB = '5.0'
global.nameqr = 'ꪶ࿋྄ིᤢꫂ๖ۣۜ𝑩𝑳𝑨𝑪𝑲 𝑪𝑳𝑶𝑽𝑬𝑹 ꫛ'
global.namebot = 'ꪶ࿋྄ིᤢꫂ๖ۣۜ𝑩𝑳𝑨𝑪𝑲 𝑪𝑳𝑶𝑽𝑬𝑹 ꫛ'
global.sessions = 'MiniSession'
global.jadi = 'MiniJadiBot'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = 'ꪶ࿋྄ིᤢꫂ๖ۣۜ𝑩𝑳𝑨𝑪𝑲 𝑪𝑳𝑶𝑽𝑬𝑹 ꫛ'
global.botname = 'ꪶ࿋྄ིᤢꫂ๖ۣۜ𝑩𝑳𝑨𝑪𝑲 𝑪𝑳𝑶𝑽𝑬𝑹 ꫛ'
global.wm = 'ꪶ࿋྄ིᤢꫂ๖ۣۜ𝑩𝑳𝑨𝑪𝑲 𝑪𝑳𝑶𝑽𝑬𝑹 ꫛ'
global.author = 'Made By THE CARLOS 👑'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ the Legends ✌︎'
global.textbot = '𝑩𝑳𝑨𝑪𝑲 𝑪𝑳𝑶𝑽𝑬𝑹 : 𝐓𝐇𝐄 𝐂𝐀𝐑𝐋𝐎𝐒'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./src/img/Menu.jpg')
global.imagen2 = fs.readFileSync('./src/img/Menu2.jpg')
global.imagen3 = fs.readFileSync('./src/img/Menu3.jpg')
global.welcome = fs.readFileSync('./src/img/welcome.jpg')
global.adios = fs.readFileSync('./src/img/adios.jpg')
global.catalogo = fs.readFileSync('./src/img/catalogo.jpg')
global.miniurl = fs.readFileSync('./src/img/miniurl.jpg')
global.avatar = fs.readFileSync('./src/img/avatar_contact.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.grupo = 'https://chat.whatsapp.com/GrcUknwrJbNIXIIrbsuXc0' //ꪶ࿋྄ིᤢꫂ๖ۣۜ𝑩𝑳𝑨𝑪𝑲 𝑪𝑳𝑶𝑽𝑬𝑹 ◢
global.grupo2 = 'https://chat.whatsapp.com/FiBcPMYEO7mG4m16gBbwpP' //muchos bots 
global.grupo3 = 'https://chat.whatsapp.com/G9zQlCHDBrn99wcC2FyWgm' //+18
global.channel = 'https://whatsapp.com/channel/0029Vai28FR7dmea9gytQm3w'
global.channel2 = ''
global.channel3 = ''
global.md = '' 
global.yt = ''
global.tiktok = ''
global.correo = 'carloscristobal@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '❀ sᥙ́⍴ᥱr ᥕһᥲ𝗍sᥲ⍴⍴ ᑲ᥆𝗍 ☄︎', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.ch = {
ch1: '120363307694217288@newsletter',
ch2: '120363307694217288@newsletter',
ch3: '120363307694217288@newsletter',
ch4: '120363307694217288@newsletter',
ch5: '120363307694217288@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
