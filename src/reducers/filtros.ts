export const reducerFilter = (state, action) => {
  switch (action.type) {
    case 'SET_YEAR':
      return { ...state, year: action.payload.year }
    case 'SET_MONTH':
      return { ...state, month: action.payload.month }
    default:
      return {...state}
  }
}
