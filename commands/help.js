const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("help")
      .setDescription("Shows the list of commands"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction, client) {
      const embed = new EmbedBuilder()
        .setTitle("Help!")
        .setColor("Random")
        .setDescription(`${Commands.join("\n")}`)
        .setTimestamp();
      interaction.reply({ embeds: [embed], ephemeral: false });
    },
  };