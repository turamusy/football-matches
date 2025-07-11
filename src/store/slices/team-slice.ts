import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITeamState } from '../../interfaces/team-state';

const initialState: ITeamState = {
  selectedTeamId: null,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setSelectedTeam: (state, action: PayloadAction<number>) => {
      state.selectedTeamId = action.payload;
    },
    clearSelectedTeam: (state) => {
      state.selectedTeamId = null;
    },
  },
});

export const { setSelectedTeam, clearSelectedTeam } = teamSlice.actions;
export default teamSlice.reducer;
