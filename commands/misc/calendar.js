/**
 * @file Dynamic help command
 * @author Swiichy
 * @since 1.0.0
 */

// Deconstructing prefix from config file to use in help command
const { prefix } = require("../../config.json");

// Deconstructing MessageEmbed to create embeds within this command
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "calendrier",
	description: "List all events of guild.",
	aliases: ["calendar"],
	cooldown: 5,

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Swiichy
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
		const { commands } = message.client;

		// If there are no args, it means it needs whole help command.

		if (!args.length) {
			/**
			 * @type {Object}
			 * @description Calendar command embed object
			 */

			let calendarEmbed = new MessageEmbed()
				.setColor(0x4286f4)
				.setURL(process.env.URL)
				.setTitle("📅 - Calendrier")
				.setDescription(
					"**Bonjour à tous voici les différents évènements de la semaine** 🥳"
				)

				.addField(
					"Jeudi / 21:00h -- Ilvl 1340 / 1370",
					`Donjon Abyssaux - Oeil d'Aira - Preveza d'Oreha`
				)
				.addField(
					"Vendredi / 21:00h -- Ilvl 1370 / 1385 / 1400",
					`Raid Abyssal - Argos P1 - P2 - P3`
				)
				.addField(
					"Dimanche / 21:00h - 22:00h - Pas de prérequis",
					`Soirée multigaming`
				)
				.addField(
					"Mardi / 21:00h -- Alt 1325 / 1340 ++",
					`Donjon Abyssaux - Oeil d'Aira - Preveza d'Oreha`
				)
				.setTimestamp()
				.setFooter({ text: "Stein Gate" });

			// Attempts to send embed in channel.

			message.channel.send({ content: "@everyone", embeds: [calendarEmbed] });
		}
	},
};
