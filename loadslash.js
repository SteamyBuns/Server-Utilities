const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client({
    intents: ["GUILDS"]
})

let bot = {
    client
}



const guildID = "870419411297767424"

client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)

client.on("ready", () => {
    const guild = client.guilds.cache.get(guildID)
    if (!guild)
    return console.error("Target guild not found")
})

client.login(process.env.TOKEN)