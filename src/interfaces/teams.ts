export interface ITeam {
    name: string,
    id: number,
    crest: string,
}

export interface IFootballClubDetails {
  address: string;
  clubColors: string;
  crest: string;
  founded: number;
  id: number;
  name: string;
  shortName: string;
  tla: string;
  venue: string;
  website: string;
}

export interface IPlayer {
  id: number;
  name: string;
  position: string;
  nationality: string;
  dateOfBirth: string;
}

interface IArea {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface IContract {
  start: string | null;
  until: string | null;
}

interface ICoach {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  contract: IContract;
}

interface ICompetition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface ITeamDetails extends IFootballClubDetails {
  area: IArea;
  coach: ICoach;
  lastUpdated: string;
  runningCompetitions: ICompetition[];
  squad: IPlayer[];
}

export interface IFootballClubResponse {
  count: number;
  filters: Record<string, string | number>
  teams: IFootballClubDetails[];
}