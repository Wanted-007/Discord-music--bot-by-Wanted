const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")


module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get Ping of Bot"),

  execute: async ({ client, interaction }) => {

    try {
      const mesg = await interaction.reply({ content: "🏓 Pong!", fetchReply: true });

      await interaction.editReply({ content: `Pong!\nBot Latency: \`${mesg.createdTimestamp - interaction.createdTimestamp}ms\`` });
    } catch (err) {
      console.log("Something Went Wrong => ", err);
    }
  }
}