const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  const{embedColor} = require("../config")
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("help")
      .setDescription("Get the list of commands"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute: async ({ client, interaction }) => {
      const embed = new EmbedBuilder()
        .setTitle("Help?")
        .setColor("Random")
        .setDescription("**🎶 Music**\n -`/play search`, `/skip`, `/pause`, `/leave`, `/queue`\n **ℹ Info** \n `/ping`, `/stats`,`/help`")
        .setTimestamp();
      interaction.reply({ embeds: [embed], ephemeral: false });
    },
  };
  