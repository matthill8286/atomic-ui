export var filters = [{
  id: '1999573',
  name: 'Article',
  filterType: 'type',
  selected: true
}, {
  id: '1999575',
  name: '15 mins',
  filterType: 'duration',
  selected: false
}, {
  id: '1999576',
  name: 'BAE Systems',
  filterType: 'provider',
  selected: true
}, {
  id: '1999577',
  name: 'EPG',
  filterType: 'provider',
  selected: false
}];
export var props = {
  freeLabel: 'Free',
  items: [].concat(filters),
  loading: false,
  filterDisabled: false,
  onChange: function onChange() {
    return null;
  },
  onIconModalOpen: function onIconModalOpen() {
    return null;
  }
};
//# sourceMappingURL=FilterList.mocks.js.map