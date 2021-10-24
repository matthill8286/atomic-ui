import { FiltersProps, FilterType } from './FilterList.interface'

export const filters: FilterType[] = [
  {
    id: '1999573',
    name: 'Article',
    filterType: 'type',
    selected: true,
  },
  {
    id: '1999575',
    name: '15 mins',
    filterType: 'duration',
    selected: false,
  },
  {
    id: '1999576',
    name: 'BAE Systems',
    filterType: 'provider',
    selected: true,
  },
  {
    id: '1999577',
    name: 'EPG',
    filterType: 'provider',
    selected: false,
  },
]
export const props: FiltersProps = {
  freeLabel: 'Free',
  items: [...filters],
  loading: false,
  filterDisabled: false,
  onChange: () => null,
  onIconModalOpen: () => null,
}
