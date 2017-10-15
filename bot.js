const Discord = require('discord.js');
const Settings = require('./settings.json');

const bot = new Discord.Client();
const SAVED_MESSAGES = {};

bot.login(Settings.BOT_TOKEN);
bot.on('message', msg => {
  const {content, author} = msg;

  if (SAVED_MESSAGES[author.id] === content) {
    msg.delete();
  } else {
    SAVED_MESSAGES[author.id] = content;
  }

  return;
});
