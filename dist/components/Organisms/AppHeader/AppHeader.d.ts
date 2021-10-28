import React from 'react';
import { GroupedActionLinksProps } from '@/components/Molecules/ActionLink';
import { LanguageMenuOption } from '@/components/Molecules/LanguageMenu';
import { NavigationButtonType, NavigationMenuListProps } from '@/components/Molecules/NavigationMenu';
import { Image } from '@/components/Organisms/ImageAndText';
export declare type HeaderContent = {
    id: string | number;
    links?: GroupedActionLinksProps['links'];
    searchEnabled?: boolean;
    searchLabel?: string;
    languageMenuEnabled?: boolean;
    hideMenu?: boolean;
    hideLinks?: boolean;
    filter?: {
        enabled?: boolean;
        placeholder?: string;
    };
    menus?: {
        links: NavigationMenuListProps['navActionList'];
    };
};
export interface AppHeaderProps {
    headerContent: HeaderContent;
    searchQuery?: string;
    languages?: LanguageMenuOption[];
    button?: NavigationButtonType | undefined;
    renderSearchBar?: JSX.Element | null;
    logoRef: Image;
    logoUrl?: string;
    langIndex?: number;
    onButtonClick?: (event?: React.MouseEvent) => void;
    onLanguageChoice?: (id?: string | number) => void;
    setFilter?: (event?: React.MouseEvent) => void;
    clearFilter?: (event?: React.MouseEvent) => void;
    onLogoClick?: (event?: React.MouseEvent) => void;
    filter?: JSX.Element;
}
export declare const AppHeaderComponent: React.MemoExoticComponent<({ headerContent, languages, button, onButtonClick, renderSearchBar, onLanguageChoice, logoUrl, setFilter, clearFilter, onLogoClick, langIndex, filter, }: AppHeaderProps) => JSX.Element>;
//# sourceMappingURL=AppHeader.d.ts.map