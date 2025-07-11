interface IArea {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface ITeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

interface ICompetition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

interface IScore {
  winner: string | null;
  duration: string;
  fullTime: {
    home: number | null;
    away: number | null;
  };
  halfTime: {
    home: number | null;
    away: number | null;
  };
}

interface ISeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: string | null;
}

interface IOdds {
  msg: string;
}

export interface IMatch {
  area: IArea;
  awayTeam: ITeam;
  competition: ICompetition;
  group: null;
  homeTeam: ITeam;
  id: number;
  lastUpdated: string;
  matchday: number;
  odds: IOdds;
  referees: any[];
  score: IScore;
  season: ISeason;
  stage: string;
  status: string;
  utcDate: string;
}

export interface IMatchResponse {
    matches: IMatch[];
    filters: Record<string, string | number | string[]>;
    resultSet: Record<string, string | number>
}
