/**
 * ' // ' 은 주석(프로그램 실행 시 영향 X)입니다.
 * 한국어 앞에 있는 ' // ' 을 삭제할 시 프로그램 실행할 때 오류가 발생하게 됩니다
 * 영어 앞에 있는 ' // ' 만 삭제해 주세요!
 */

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
  // 전체 멤버 수를 디스코드 서버 채널에 적용

  // client.channels.cache.get(settings.statsChannel.member).setName('Member: ' + stats.member)
  // 유저 수를 디스코드 서버 채널에 적용

  // client.channels.cache.get(settings.statsChannel.bot).setName('Bot: ' + stats.bot)
  // 봇 수를 디스코드 서버 채널에 적용

  client.channels.cache.get(settings.statsChannel.voice).setName('📡ㅣ음성 연결 : ' + stats.voice)
  // 음성 채널에 접속한 유저 수를 서버 채널에 적용
  
  return console.log("Member count updated", stats)
}

// client.on('guildMemberJoin', () => updateMembers)
// 서버에 멤버가 들어왔을 때 실행

// client.on('guildMemberRemove', () => updateMembers)
// 서버에서 멤버가 나갔을 떄 실행

client.on('voiceStateUpdate', (oldState, newState) => {
  const voiceChannels = newState.member.guild.channels.cache.filter(c => c.type === 'voice')
  let count = 0
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size
  return console.log("Now voice connection member: ", count)
})

client.on("ready", () => {
  console.log("Bot Ready")

  updateMembers()
  setInterval(updateMembers, 1000 * 60 * 10)
})

client.login(settings.token)