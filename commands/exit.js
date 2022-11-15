const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leave")
    .setDescription("Disconnects bot from the vc."),
  execute: async ({ client, interaction }) => {

    // Get the current queue
    const queue = client.player.getQueue(interaction.guildId)

    if (!queue) {
      await interaction.reply("There are no songs in the queue")
      return;
    }

    // Deletes all the songs from the queue and exits the channel
    queue.destroy();

    await interaction.reply("Why you do this to me?")
  },
}