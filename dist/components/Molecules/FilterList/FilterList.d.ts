import * as React from 'react';
import { FilterEntryProps, FiltersProps } from './FilterList.interface';
import { StyledSkeleton } from './FilterList.styled';
declare const FilterEntry: ({ onChange, freeLabel, item, filterDisabled, onDisabledFiltersClick, }: FilterEntryProps) => React.ReactElement;
declare const Filters: React.FC<FiltersProps>;
export { Filters, StyledSkeleton, FilterEntry };
//# sourceMappingURL=FilterList.d.ts.map