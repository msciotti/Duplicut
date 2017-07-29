const Discord = require('discord.js');
const Settings = require('./settings.json');

const bot = new Discord.Client();
let savedMessage = {};

bot.login(Settings.BOT_TOKEN);
bot.on('message', message => {
  if (savedMessage.author === message.author && savedMessage.content === message.content) {
    message.delete();
    return;
  }

  savedMessage = message;
  return;
});
