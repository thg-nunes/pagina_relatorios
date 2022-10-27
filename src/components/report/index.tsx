import { Dispatch, SetStateAction } from 'react'
import { _deleteReport } from '../../hooks/reports'
import { api } from '../../services/axios'
import { DownloadReport } from '../icons'
import * as Styled from './styled'

type ReportProps = {
  textReport: string
  fileId: string
  setStatusDeleteReport: Dispatch<SetStateAction<string>>
}

export const Report = ({ textReport, fileId, setStatusDeleteReport }: ReportProps) => {
  const removeingSpecialCharacters = textReport.replace(/[_.pdf]/g, '')
  const replacesFirstLetterOfReportToUppercase = removeingSpecialCharacters.replace(/[`^r`]/i, 'R')
  const replacesFirstLetterOfEstatisticaToUppercase = replacesFirstLetterOfReportToUppercase.replace('estatisticos', ' Estatisticos - ')
  const textTreatyReport = replacesFirstLetterOfEstatisticaToUppercase
  const role = localStorage.getItem('relatorio.role')

  return (
    <Styled.Container>
      <span>
        <p>{textTreatyReport}</p>
        <Styled.Icons>
          {role === 'admin' && (
            <img
              src='/relatorios/icons/btn-delete.svg'
              alt='botao para deletar relatorio'
              onClick={async () => {
                await _deleteReport({setStatusDeleteReport, fileId})
              }}
            />
          )}
          <DownloadReport srcImage='/relatorios/icons/btn-download.svg' altImage='botao para baixar relatorio' fileId={fileId} />
        </Styled.Icons>
      </span>
    </Styled.Container>
  )
}
