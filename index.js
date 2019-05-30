const TOKEN = '714194235:AAFHU5yPOdVWuRPqnyoP6iGmNKhr_nBYoPs'

const TelegramBot = require('node-telegram-bot-api')
require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){ res.end('') })
const bot = new TelegramBot(TOKEN, {polling:true})

bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, `Hello from Leverx, bot says "Hi, ${msg.from.first_name}"`)
})