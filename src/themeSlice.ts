import { createSlice } from '@reduxjs/toolkit';

//using localStorage
const getInitialTheme = (): boolean => {
    return localStorage.getItem('isDarkMode') === 'true';
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: getInitialTheme(),
    }, reducers: {
        toggleTheme(state) {
            state.isDarkMode = !state.isDarkMode;
            localStorage.setItem('isDarkMode', String(state.isDarkMode));
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;