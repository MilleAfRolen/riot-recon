const { request } = require("undici");
const dayjs = require("dayjs");

const region = "https://europe.api.riotgames.com";
const platform = "https://euw1.api.riotgames.com";
const API_KEY = `api_key=${process.env.RIOT_API_KEY}`;

const getPUUID = async (gameName: string, tagLine: string) => {
  const response = await request(
    region +
      `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?${API_KEY}`
  );
  const { puuid } = await response.body.json();
  return puuid;
};

const getSummonerInfo = async (puuid: string) => {
  const response = await request(
    platform + `/lol/summoner/v4/summoners/by-puuid/${puuid}?${API_KEY}`
  );
  return await response.body.json();
};

const getCurrentDayMatchIds = async (puuid: string) => {
  const beginningOfToday = dayjs().startOf("day").unix();
  console.log(beginningOfToday);
  const response = await request(
    region +
      `/lol/match/v5/matches/by-puuid/${puuid}/ids?startTime=${beginningOfToday}&type=ranked&${API_KEY}`
  );
  const ids = await response.body.json();
  return ids;
};

const getMatchInfo = async (matchId: string) => {
  const response = await request(
    region + `/lol/match/v5/matches/${matchId}?${API_KEY}`
  );
  return await response.body.json();
};

export { getPUUID, getSummonerInfo, getCurrentDayMatchIds, getMatchInfo };
