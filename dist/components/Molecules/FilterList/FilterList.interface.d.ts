export declare type FilterTypes = 'type' | 'provider' | 'duration';
export interface FilterType {
    id: string;
    additionalContent?: string | undefined;
    name: string;
    filterType?: FilterTypes;
    selected?: boolean;
}
export interface Knobs {
    onChange: (isCheck: boolean, id: string | undefined) => void;
}
export interface FiltersProps extends Knobs {
    headline?: string;
    freeLabel: React.ReactNode | string | React.ReactElement;
    items: FilterType[];
    loading: boolean;
    onIconModalOpen?: (content: string) => void;
    onDisabledFiltersClick?: () => void;
    index?: number;
    filterDisabled?: boolean;
}
export interface FilterEntryProps extends FiltersProps {
    item: FilterType;
}
export interface StyledEntryProps {
    isDisabled: boolean;
}
//# sourceMappingURL=FilterList.interface.d.ts.map