const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "$",
    owners: ["529394825024372756"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot


// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

// client.on("messageCreate", (message) => {
//     if (message.content == "hi") {
//         message.reply("Hello World!")
//     }
// })

// const welcomeChannelId = "870423038024384542"

// client.on("guildMemberAdd", (member) => {
//     member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
// })

client.login(process.env.TOKEN)