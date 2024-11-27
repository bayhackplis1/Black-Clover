import fg from 'api-dylux';
import axios from 'axios';
import cheerio from 'cheerio';
import {tiktok} from '@xct007/frieren-scraper';
import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {tiktokdl} from '@bochilteam/scraper';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  if (!text) return conn.reply(m.chat, `🚩 Te faltó el link del video de tiktok.`, m, rcanal);
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `🚩 Enlace no válido.`, m, fake);
  const texto = `_💌 @${m.sender.split`@`[0]}  ᩭ✎Enviando Video, espere un momento...._`;
  try {
 await m.react('🕒') 
    const aa = {quoted: m, userJid: conn.user.jid};
    const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: texto, contextInfo: {externalAdReply: {title: packname, body: wm, thumbnail: icons, sourceUrl: redes}, mentionedJid: [m.sender]}}}, aa);
    await conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id, mentions: [m.sender]});
    const dataFn = await conn.getFile(`${CFROSAPI}/api/tiktokv2?url=${args[0]}`);
    const desc1n = `_💌  ᩭ✎Tiktok sin marca de agua descargado con éxito_`;
    await conn.sendMessage(m.chat, {video: dataFn.data, caption: desc1n}, {quoted: fkontak});
  } catch (ee1) {
  try {
    const dataF = await tiktok.v1(args[0]);
    const desc1 = `_💌  ᩭ✎Tiktok sin marca de agua descargado con éxito_`;
    await conn.sendMessage(m.chat, {video: {url: dataF.play}, caption: desc1}, {quoted: fkontak});
  } catch (e1) {
    try {
      const tTiktok = await tiktokdlF(args[0]);
      const desc2 = `_💌  ᩭ✎Tiktok sin marca de agua descargado con éxito_`;
      await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: desc2}, {quoted: fkontak});
    } catch (e2) {
      try {
        const p = await fg.tiktok(args[0]);
        const te = `_💌  ᩭ✎Tiktok sin marca de agua descargado con éxito_`;
        await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: te}, {quoted: fkontak});
      } catch (e3) {
        try {
          const {author: {nickname}, video, description} = await tiktokdl(args[0]);
          const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
          const cap = `_💌  ᩭ✎Tiktok sin marca de agua descargado con éxito_`;
          await conn.sendMessage(m.chat, {video: {url: url}, caption: cap}, {quoted: fkontak});
        } catch {
        return conn.reply(m.chat, `🚩 Ocurrió un error.`, m, rcanal);
          }
        }
      }
    }
  }
};
handler.tags = ['descargas'];
handler.help = ['tiktok'];
handler.command = ['tiktok', 'ttk', 'tt'];
handler.register = true;
export default handler;

async function tiktokdlF(url) {
  if (!/tiktok/.test(url)) return conn.reply(m.chat, `🚩 Te faltó el link del video de tiktok.`, m, rcanal);
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr( 'value' );
  const param = {url: url, _token: token};
  const {data} = await axios.request('https://tikdown.org/getAjax?', {method: 'post', data: new URLSearchParams(Object.entries(param)), headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'}});
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {status: true, thumbnail: getdata('img').attr('src'), video: getdata('div.download-links > div:nth-child(1) > a').attr('href'), audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')};
  } else {
    return {status: false};
  }
}