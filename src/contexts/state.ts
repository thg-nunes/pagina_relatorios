const initial_date = new Date()

const stateFilters = {
  month: null,
  year:
    initial_date.getMonth() >= 2 && initial_date.getDate() >= 1
      ? initial_date.getFullYear()
      : initial_date.getFullYear() - 1,
  searchByMonthOrYear: null,
}

export { stateFilters }
