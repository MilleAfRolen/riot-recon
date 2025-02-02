import "dotenv/config";
import { Client, Collection, Events, MessageFlags } from "discord.js";
import fs from "fs";
import path from "path";
import { CommandKit } from "commandkit";
// import {
//   getPUUID,
//   getSummonerInfo,
//   getCurrentDayMatchIds,
//   getMatchInfo,
// } from "./api";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

new CommandKit({
  client,
  devGuildIds: ["1334996004432384110"],
  devUserIds: ["351452531588726786", "222990126370914306"],
  eventsPath: `${__dirname}/events`,
  commandsPath: `${__dirname}/commands`,
  validationsPath: `${__dirname}/validations`,
  bulkRegister: true,
  skipBuiltInValidations: true,
});

client.login(process.env.TOKEN);

// const league = async () => {
//   const puuid = await getPUUID("richtern", "euw");
//   const summonerId = await getSummonerInfo(puuid);
//   const test = await getCurrentDayMatchIds(puuid);
//   const test2 = await getMatchInfo(test[0]);
// };

// league();
