const Discord = require("discord.js")
const client = new Discord.Client()

const settings = require( "./settings.json")

const updateMembers = () => {
  const guild = client.guilds.cache.get(settings.guildId)

  stats = {
    all: guild.memberCount,
    member: guild.members.cache.filter((member) => !member.user.bot).size,
    bot: guild.members.cache.filter((member) => member.user.bot).size,
    voice: guild.members.cache.filter((member) => member.voice.channel ? member.voice.channel.guild.id === guild.id : false).size
  }

  // client.channels.cache.get(settings.statsChannel.all).setName('All: ' + stats.all)
  // client.channels.cache.get(settings.statsChannel.member).setName('Member: ' + stats.member)
  // client.channels.cache.get(settings.statsChannel.bot).setName('Bot: ' + stats.bot)
  client.channels.cache.get(settings.statsChannel.voice).setName('📡ㅣ음성 연결 : ' + stats.voice)
  console.log("Voice connection updated", stats.voice)
  
  return console.log("Member count updated", stats)
}

// client.on('guildMemberJoin', () => updateMembers)
// client.on('guildMemberRemove', () => updateMembers)
// client.on('voiceStateUpdate', (oldState, newState) => {
//   const voiceChannels = newState.member.guild.channels.cache.filter(c => c.type === 'voice')
//   let count = 0
//   for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size
//   console.log("Voice connection updated", count)
//   return client.channels.cache.get(settings.statsChannel.voice).setName('📡ㅣ음성 연결 : ' + count)
// })

client.on("ready", () => {
  console.log("Bot Ready")

  updateMembers()
  setInterval(updateMembers, 1000 * 60 * 10)
})

client.login(settings.token)