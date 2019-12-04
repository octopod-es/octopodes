const initialData = {
  cards : {
    'company-1': {id: 'company-1', content: 'Google'},
    'company-2': {id: 'company-2', content: 'Facebook'},
    'company-3': {id: 'company-3', content: 'Apple'},
    'company-4': {id: 'company-4', content: 'Amazon'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Interested',
      taskIds: ['company-1', 'company-2','company-3','company-4'],
    },
  },
  ColumnOrder: ['column-1'],
}

export default initialData;
