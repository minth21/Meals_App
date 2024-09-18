
import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    isDarkMode: false,
    isNotificationsEnabled: true,
    language: 'vi', // hoặc giá trị mặc định khác
  },
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleNotifications(state) {
      state.isNotificationsEnabled = !state.isNotificationsEnabled;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

// Xuất các action và reducer
export const { toggleDarkMode, toggleNotifications, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
