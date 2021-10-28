import { BaseThemedCssFunction, ThemedStyledInterface, ThemeProps } from 'styled-components';
import { Theme } from '@/types/theme';
export { ThemeConsumer, ThemeContext, keyframes } from 'styled-components';
export declare type ThemedStyledProps<P, T> = P & ThemeProps<T>;
export declare const styled: ThemedStyledInterface<Theme>;
export declare const css: BaseThemedCssFunction<Theme>;
export { ThemeProvider } from './ThemeProvider';
//# sourceMappingURL=styled.d.ts.map