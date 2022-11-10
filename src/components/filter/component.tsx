import { Dispatch, ReactElement, SetStateAction } from 'react'
import * as Styled from './styled'

type FilterProps = {
  labelId: string
  labelText: string
  filterOptionsVisible: boolean
  placeholder: string
  dataToOptionsFilter: ReactElement[]
  setStateToFilter: Dispatch<SetStateAction<boolean>>
}

export const FilterComponent = ({
  labelId,
  labelText,
  filterOptionsVisible,
  dataToOptionsFilter,
  placeholder,
  setStateToFilter
}: FilterProps) => {
  return (
    <Styled.Container>
      <label id={labelId}>{labelText}:</label>
        <Styled.InputAndOptions>
          <input
            type="text"
            placeholder={placeholder}
            onClick={() => setStateToFilter(!filterOptionsVisible)}
          />
          <Styled.Options filterVisible={filterOptionsVisible}>
            {dataToOptionsFilter.map(year => (
              year
            ))}
          </Styled.Options>
        </Styled.InputAndOptions>
    </Styled.Container>
  )
}
