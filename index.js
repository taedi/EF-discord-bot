const Discord = require("discord.js")
const client = new Discord.Client()

const settings = require( "./settings.json")

client.on("ready", () => {
  console.log("Bot Ready")

  const guild = client.guilds.cache.get(settings.guildId)
  const channels = {
    all: client.channels.cache.get(settings.statsChannel.all),
    member: client.channels.cache.get(settings.statsChannel.member),
    bot: client.channels.cache.get(settings.statsChannel.bot),
    voice: client.channels.cache.get(settings.statsChannel.voice)
  }

  fn()
  setInterval(fn, 1000)
  async function fn () {
    const stats = {
      all: guild.memberCount,
      member: guild.members.cache.filter((member) => !member.user.bot).size,
      bot: guild.members.cache.filter((member) => member.user.bot).size,
      voice: guild.members.cache.filter((member) => member.voice.channel ? member.voice.channel.guild.id === guild.id : false).size
    }
    
    await channels.all.setName('All: ' + stats.all)
    await channels.member.setName('Member: ' + stats.member)
    await channels.bot.setName('Bot: ' + stats.bot)
    await channels.voice.setName('Voice: ' + stats.voice)

    console.log('Member count success', stats)
  }
})

client.login(settings.token)