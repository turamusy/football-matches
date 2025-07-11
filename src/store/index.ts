// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { footballApi } from '../services/football';
import teamReducer from '../store/slices/team-slice';

export const store = configureStore({
  reducer: {
    team: teamReducer,
    [footballApi.reducerPath]: footballApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(footballApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
