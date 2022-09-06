import { useEffect, useState } from 'react'
import { useMyContextFilters } from '../../hooks/contexts/useMyContextFilters'
import { Icon } from '../icons/print'
import * as Styled from './styled'

type ReportProps = {
  textReport: string
}

export const Report = ({ textReport }: ReportProps) => {
  const [fileId, setFileId] = useState('')

  const context = useMyContextFilters()
  const file_id = context.state.searchByMonthOrYear

  useEffect(() => {
    if(file_id !== null) {
      setFileId(file_id[0].id)
    }
  }, [])

  return (
    <Styled.Container>
      <span>
        <p>{textReport}</p>
        <Styled.Icons>
          <Icon srcImage='/icons/btn-download.svg' altImage='botao para baixar relatorio' fileId={fileId} />
          <Icon srcImage='/icons/btn-print.svg' altImage='botao para tirar um print do relatorio' />
        </Styled.Icons>
      </span>
    </Styled.Container>
  )
}
