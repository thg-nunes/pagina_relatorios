const initial_date = new Date()

const stateFilters = {
  month: initial_date.getMonth() + 1,
  year:
    initial_date.getMonth() >= 2 && initial_date.getDate() >= 1
      ? initial_date.getFullYear()
      : initial_date.getFullYear() - 1,
}

export { stateFilters }
