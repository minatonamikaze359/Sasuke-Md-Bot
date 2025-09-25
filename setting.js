/* 

   </> 𝗦𝗰𝗿𝗶𝗽𝘁 𝗥𝗲𝘆𝗕𝗼𝘁𝘇 𝗕𝘆 Tamim </>
   
   Buy Script no Enc: 
   - Telegram (t.me/itachiuchia359)
   - Whatsapp ( https://wa.me/8801405706180 ) 
   
   Follow Channel Developer
   - Minato Namikaze  (https://whatsapp.com/channel/0029VaZb8IQ9mrGc8tGETf2i) 
   
 
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '8801405706180'
global.versi = version
global.namaOwner = "Minato "
global.packname = 'SasukeBot'
global.botname = 'SasukeBot'
global.botname2 = 'SasukeMd'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/8801405706180"
global.linkGrup = "https://whatsapp.com/channel/0029VaZb8IQ9mrGc8tGETf2i"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VbApvHeDeONDMP8Slr2v"
global.idSaluran = "120363401150391860@newsletter"
global.namaSaluran = "⏤͟͟͞Sasuke ┃┃ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "8801405706180"
global.ovo = "Free for all"
global.gopay = "Free"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "simplebotz85"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://ibb.co.com/6cfpdk2b", 
reply: "https://ibb.co.com/6cfpdk2b", 
logo: "https://ibb.co.com/6cfpdk2b", 
qris: "https://ibb.co.com/6cfpdk2b"
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://fyzzstoree.imey7.com"
global.apikey = "ptla_PNdG46MazCvHu7g0UUZuTloi0OJ1kfV8vJT73WTDngv" //ptla
global.capikey = "ptlc_VZI8kQ0DLilAOoIVLWm85dvKHOZm2ZbTtcUgZkawisl" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"skypedia.qzz.io": {
    "zone": "59c189ec8c067f57269c8e057f832c74",
    "apitoken": "mZd-PC7t7PmAgjJQfFvukRStcoWDqjDvvLHAJzHF"
  }, 
  "pteroweb.my.id": {
    "zone": "714e0f2e54a90875426f8a6819f782d0",
    "apitoken": "vOn3NN5HJPut8laSwCjzY-gBO0cxeEdgSLH9WBEH"
  },
  "panelwebsite.biz.id": {
    "zone": "2d6aab40136299392d66eed44a7b1122",
    "apitoken": "CcavVSmQ6ZcGSrTnOos-oXnawq4yf86TUhmQW29S"
  },
  "privatserver.my.id": {
    "zone": "699bb9eb65046a886399c91daacb1968",
    "apitoken": "CcavVSmQ6ZcGSrTnOos-oXnawq4yf86TUhmQW29S"
  },
  "serverku.biz.id": {
    "zone": "4e4feaba70b41ed78295d2dcc090dd3a",
    "apitoken": "CcavVSmQ6ZcGSrTnOos-oXnawq4yf86TUhmQW29S"
  },
  "vipserver.web.id": {
    "zone": "e305b750127749c9b80f41a9cf4a3a53",
    "apitoken": "cpny6vwi620Tfq4vTF4KGjeJIXdUCax3dZArCqnT"
  }, 
  "mypanelstore.web.id": {
    "zone": "c61c442d70392500611499c5af816532",
    "apitoken": "uaw-48Yb5tPqhh5HdhNQSJ6dPA3cauPL_qKkC-Oa"
  }
}
//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Tamim ]*\nFitur ini hanya untuk owner bot!\n> Lu Blm mendapatkan akses Agar Fitur Bisa Digunakan",
	admin: "*[ Tamim ]*\nFitur ini hanya untuk admin grup!\n> Harus Menjadi Admin Agar Fitur Bisa Digunakan",
	botAdmin: "*[ Tamim ]*\nFitur ini hanya untuk ketika bot menjadi admin!\n> Bot Harus Menjadi Admin Agar Fitur Bisa Digunakan",
	group: "*[ Sasuke-Md-Bot ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Minato ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ who know ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
