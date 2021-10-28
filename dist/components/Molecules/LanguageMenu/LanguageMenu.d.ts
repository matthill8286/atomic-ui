import { FC } from 'react';
export declare type LanguageMenuOption = {
    label: string;
    id: number;
    url?: string;
    to?: string;
};
export interface LanguageMenuProps {
    className?: string;
    languages: LanguageMenuOption[];
    testIdSuffix?: string;
    extendedLanguageHandler: (item: LanguageMenuOption) => void;
    setupCurrentIndex?: number;
    isMobile?: boolean;
}
export declare const LanguageMenu: FC<LanguageMenuProps>;
//# sourceMappingURL=LanguageMenu.d.ts.map