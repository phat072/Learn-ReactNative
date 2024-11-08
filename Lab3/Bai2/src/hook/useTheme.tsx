import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the theme state shape
type TThemeState = {
  theme: "Light" | "Dark";
  fontSize: number;
};

// Create a context with default values
const ThemeContext = createContext<{
  themeState: TThemeState;
  toggleTheme: () => void;
  setFontSize: (fontSize: number) => void;
}>({
  themeState: { theme: "Light", fontSize: 16 },
  toggleTheme: () => {},
  setFontSize: () => {},
});

// Create a provider to manage theme state
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeState, setThemeState] = useState<TThemeState>({
    theme: "Light",
    fontSize: 16,
  });

  // Load theme and fontSize from AsyncStorage on mount
  useEffect(() => {
    const loadThemeSettings = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        const savedFontSize = await AsyncStorage.getItem('fontSize');

        if (savedTheme) {
          setThemeState((prevState) => ({
            ...prevState,
            theme: savedTheme as "Light" | "Dark",
          }));
        }

        if (savedFontSize) {
          setThemeState((prevState) => ({
            ...prevState,
            fontSize: parseInt(savedFontSize, 10),
          }));
        }
      } catch (error) {
        console.error('Failed to load theme settings from AsyncStorage', error);
      }
    };

    loadThemeSettings();
  }, []);

  const toggleTheme = async () => {
    const newTheme = themeState.theme === "Light" ? "Dark" : "Light";
    setThemeState((prevState) => ({
      ...prevState,
      theme: newTheme,
    }));
    await AsyncStorage.setItem('theme', newTheme);
  };

  const setFontSize = async (fontSize: number) => {
    setThemeState((prevState) => ({
      ...prevState,
      fontSize,
    }));
    await AsyncStorage.setItem('fontSize', fontSize.toString());
  };

  return (
    <ThemeContext.Provider value={{ themeState, toggleTheme, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
