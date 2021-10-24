import * as React from 'react'
import { Selectable } from '@/components/Atoms/Selectable'
import { FilterEntryProps, FiltersProps, FilterType } from './FilterList.interface'
import { StyledEntry, StyledEntryText, StyledSkeleton } from './FilterList.styled'

const FilterEntry = ({
  onChange,
  freeLabel,
  item,
  filterDisabled,
  onDisabledFiltersClick,
}: FilterEntryProps): React.ReactElement => {
  const { id, filterType, selected } = item
  const inputId = `${filterType}-${id}`
  return (
    <StyledEntry
      data-test={'ewb-filters-entry'}
      onClick={onDisabledFiltersClick}
      isDisabled={!!filterDisabled}>
      <Selectable
        type="checkbox"
        selectableId={inputId}
        name={inputId}
        label=""
        value={id}
        isChecked={!!selected}
        state={filterDisabled ? 'disabled' : 'idle'}
        onChangeValue={(isCheck, value) => onChange(isCheck, value)}>
        <StyledEntryText>{item.name}</StyledEntryText>
      </Selectable>
    </StyledEntry>
  )
}

const Filters: React.FC<FiltersProps> = (props: FiltersProps): React.ReactElement | null => {
  const { items, loading } = props

  return loading ? (
    <StyledSkeleton />
  ) : (
    <>
      {items &&
        items.length > 0 &&
        items.map((item: FilterType, index: number): React.ReactElement | null => (
          <FilterEntry {...{ ...props, ...{ index: index } }} item={item} key={index} />
        ))}
    </>
  )
}

export { Filters, StyledSkeleton, FilterEntry }
