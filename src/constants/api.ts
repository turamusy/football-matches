export const API_ENDPOINTS = {
  TEAMS: '/teams',
  TEAM_BY_ID: (id: number) => `/teams/${id}`,
  TEAM_MATCHES: (id: number) => `/teams/${id}/matches?status=SCHEDULED`,
};