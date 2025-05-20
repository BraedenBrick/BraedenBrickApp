import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { toggleTheme } from './themeSlice';

const ThemeToggle: React.FC = () => {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

    return (
        <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;