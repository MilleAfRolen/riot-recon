import type { Message, PartialMessage, Client } from "discord.js";
import type { CommandKit } from "commandkit";

export default function (
  oldMessage: Message<boolean> | PartialMessage,
  newMessage: Message<boolean> | PartialMessage,
  client: Client<true>,
  handler: CommandKit
) {
  console.log(
    `Message edited from ${oldMessage.content} to ${newMessage.content}`
  );
}
