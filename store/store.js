import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites';
import settingsReducer from './settings';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    settings: settingsReducer,
  },
});