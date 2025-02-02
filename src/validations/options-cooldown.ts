import type { ValidationProps } from "commandkit";

export default function ({
  interaction,
  commandObj,
  handler,
}: ValidationProps) {
  if (commandObj.options?.cooldown) {
    if ("reply" in interaction) {
      interaction.reply("You are on cooldown!");
    }
    return true;
  }
}
