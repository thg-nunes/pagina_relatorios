type ReducerFilterProps = {
  state: {
    month: null,
    year: number,
    searchByMonthOrYear: null
  },
  action: {
    type: string,
    payload: any
  }
}
export const reducerFilter = ({state, action}: ReducerFilterProps) => {
  switch (action.type) {
    case 'SET_YEAR':
      return { ...state, year: action.payload.year }
    case 'SET_MONTH':
      return { ...state, month: action.payload.month }
    case 'SEARCH_REPORT':
      return { ...state, searchByMonthOrYear: action.payload.data }
    default:
      return {...state}
  }
}
