import { useAppSelector } from './hooks';

export const useThemeClass = (): string => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    return isDarkMode ? 'App dark' : 'App';
};