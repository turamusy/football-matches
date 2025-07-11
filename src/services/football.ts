import { createApi } from '@reduxjs/toolkit/query/react'
import { API_ENDPOINTS } from '../constants/api';
import { axiosBaseQuery } from '../api/base-query';
import { API_URL } from '@env';
import { IMatchResponse } from '../interfaces/match';
import { IFootballClubResponse, ITeamDetails } from '../interfaces/teams';

export const footballApi = createApi({
  reducerPath: 'footballApi',
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getTeams: builder.query<IFootballClubResponse, { limit: number; offset: number }>({
      query: ({ limit, offset }) => ({
        url: API_ENDPOINTS.TEAMS,
        params: { limit, offset },
      }),
    }),

    getTeamDetails: builder.query<ITeamDetails, number>({
      query: (id) => ({
        url: API_ENDPOINTS.TEAM_BY_ID(id),
      }),
    }),

    getTeamMatches: builder.query<IMatchResponse, number>({
      query: (id) => ({
        url: API_ENDPOINTS.TEAM_MATCHES(id),
      }),
    }),
  }),
});

export const {
  useGetTeamsQuery,
  useGetTeamDetailsQuery,
  useGetTeamMatchesQuery,
} = footballApi;