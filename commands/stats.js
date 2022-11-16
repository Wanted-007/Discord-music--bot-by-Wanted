const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")
const { color , thumbnail} = require("../config")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stats")
    .setDescription("Get Stats of Bot"),

  execute: async ({ client, interaction }) => {
    //***********
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

      const embed = new EmbedBuilder()
      .setDescription(`🏓Pong!\nBot Latency: \`${Math.round(client.ws.ping)}ms\`\nServer count: ${client.guilds.cache.size}\nUptime: ${uptime}`)
      .setThumbnail(thumbnail)
      .setColor(interaction.guild.members.me.roles.highest.hexColor)

      interaction.reply({ embeds: [embed], ephemeral: false });
    }
  }
