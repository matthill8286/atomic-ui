import React from 'react';
import { saiyanTheme } from './sc-vars-saiyan';
declare type theme = typeof saiyanTheme;
interface ThemeProviderProps {
    children: React.ReactNode;
    theme: theme;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map