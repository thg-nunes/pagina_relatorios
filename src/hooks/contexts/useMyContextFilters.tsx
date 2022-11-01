import { useContext } from "react"
import { ContextFilters } from "../../contexts/contextProvider"

type DispatchFiltersData = {
  type: string,
  payload: any
}

type ContextFiltersProps = {
  dispatch: (data: DispatchFiltersData) => void
  state: {
    month: number
    year: number
    searchByMonthOrYear: {
      id: string,
      file: string
    }[] | null
    popupVisible: boolean
  }
}

const useMyContextFilters = () => {
  const context = useContext<ContextFiltersProps>(ContextFilters)

  return context
}

export { useMyContextFilters }
