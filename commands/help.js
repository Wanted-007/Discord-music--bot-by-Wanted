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
        .setColor(interaction.guild.members.me.roles.highest.hexColor)
        .setDescription(`${Commands.join("\n")}`)
        .setTimestamp();
      interaction.reply({ embeds: [embed], ephemeral: true });
    },
  };