const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")


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
    //************
    try {
      const mesg = await interaction.reply({ content: "🏓 Pong!", fetchReply: true });

      await interaction.editReply({ content: `Pong!\nBot Latency: \`${mesg.createdTimestamp - interaction.createdTimestamp}ms\`\nServer count: ${client.guilds.cache.size}\nUptime: ${uptime}` });
    } catch (err) {
      console.log("Something Went Wrong => ", err);
    }
  }
}