// const Discord = require('discord.js')
const commando = require('discord.js-commando')
const config = require('./config/config')
const settings = new config
const bot = new commando.Client({
  owner: settings.getOwner(),
  commandPrefix: settings.getCommandPrefix()
})

bot.registry.registerGroups([
        ['random', 'Random'],
        ['util', 'Utilities'],
        ['images', 'Images'],
    ])

bot.registry.registerDefaults()
bot.registry.registerCommandsIn(__dirname + "/commands")
bot.login(settings.getToken())
