import { useContext } from "react"
import { ContextFilters } from "../../contexts/contextProvider"

type DispatchFilters = {}

type ContextFiltersProps = {
  dispatch: () => void
  state: {
    month: number
    year: number
  }
}

const useMyContextFilters = () => {
  const context = useContext<ContextFiltersProps>(ContextFilters)

  return context
}

export { useMyContextFilters }
