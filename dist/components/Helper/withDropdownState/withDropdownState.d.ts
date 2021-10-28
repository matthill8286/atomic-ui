import { DropdownProps } from '@/components/Molecules/Dropdown/Dropdown.interface';
export interface DropDownEnhancementProps {
    showDropdown: boolean;
    toggleDropdown: () => void;
}
export declare const withDropdownState: (WrappedComponent: any, { displayName }: {
    displayName?: string | undefined;
}) => {
    (props: DropdownProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=withDropdownState.d.ts.map