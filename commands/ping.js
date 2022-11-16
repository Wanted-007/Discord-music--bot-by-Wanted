const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");
const{embedColor} = require("../config")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("This will return pong!"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute: async ({ client, interaction }) => {
    const embed = new EmbedBuilder()
      .setTitle("Pong!")
      .setColor("Random")
      .setDescription(
        `Latency is **${
          Date.now() - interaction.createdTimestamp
        }ms**.`
      )
      .setTimestamp();
    interaction.reply({ embeds: [embed], ephemeral: false });
  },
};
