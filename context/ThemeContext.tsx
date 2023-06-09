'use client';
import { createContext, useState } from 'react';

interface ThemeContextValue {
  toggle: () => void;
  mode: string;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState('light');

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const contextValue: ThemeContextValue = { toggle, mode };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
