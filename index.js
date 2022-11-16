require('ffmpeg-static');
require("dotenv").config();

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, GatewayIntentBits, Events, Collection } = require('discord.js');
const { Player } = require("discord-player")

const fs = require('fs');
const path = require('path');

/****************************

const token = process.env.TOKEN
const clientId="1033754801089024082"

const rest = new REST({ version: '10' }).setToken(token);
*****************************/

const client = new Client({
  intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildVoiceStates]
});


// List of all commands
const commands = [];
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands"); // E:\yt\discord bot\js\intro\commands
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  client.commands.set(command.data.name, command);
  commands.push(command.data.toJSON());
}

client.player = new Player(client, {
  ytdlOptions: {
    quality: "highestaudio",
    highWaterMark: 1 << 25
  }
})

client.on("ready", () => {
  // Get all ids of the servers
  const guild_ids = client.guilds.cache.map(guild => guild.id);


  const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
  for (const guildId of guild_ids) {
    rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, guildId),
      { body: commands })
      .then(() => console.log('Successfully updated commands for guild ' + guildId))
      .catch(console.error);
  }
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute({ client, interaction });
  }
  catch (error) {
    console.error(error);
    await interaction.reply({ content: "There was an error executing this command" });
  }
});

client.on("message", (message) => {
  if (message.content === '!ping') {
    message.channel.send("Pinging ...")
      .then((msg) => {
        msg.edit("Pong: " + (Date.now() - msg.createdTimestamp) + "ms")
      });
  }
})

/*         Delete Commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
*/

client.on("ready", () => {
  client.user.setPresence({
      activities: [{ 
        name: "Music",
        type: "PLAYING"
      }],
      status: "idle"
  })
})

client.login(process.env.TOKEN);
