const Discord = require("discord.js")
const client = new Discord.Client()

const settings = require( "./settings.json")
const guild = client.guilds.cache.get(settings.guildId)

const updateMembers = guild => {
  stats = {
    all: guild.memberCount,
    member: guild.members.cache.filter((member) => !member.user.bot).size,
    bot: guild.members.cache.filter((member) => member.user.bot).size
  }

  client.channels.cache.get(settings.statsChannel.all).setName('All: ' + stats.all)
  client.channels.cache.get(settings.statsChannel.member).setName('Member: ' + stats.member)
  client.channels.cache.get(settings.statsChannel.bot).setName('Bot: ' + stats.bot)
  console.log("Member count updated", stats)
}

client.on('guildMemberJoin', (member) => updateMembers(member.guild))
client.on('guildMemberRemove', (member) => updateMembers(member.guild))
client.on('voiceStateUpdate', (oldState, newState) => {
  const voiceChannels = newState.member.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  console.log("Voice connection updated", count)
  return client.channels.cache.get(settings.statsChannel.voice).setName('📡ㅣ음성 연결 : ' + count);
})

client.on("ready", () => {
  console.log("Bot Ready")
})

client.login(settings.token)