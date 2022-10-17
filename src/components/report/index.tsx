import { api } from '../../services/axios'
import { DownloadReport } from '../icons'
import * as Styled from './styled'

type ReportProps = {
  textReport: string
  fileId: string
}

export const Report = ({ textReport, fileId }: ReportProps) => {
  const removeingSpecialCharacters = textReport.replace(/[_.pdf]/g, '')
  const replacesFirstLetterOfReportToUppercase = removeingSpecialCharacters.replace(/[`^r`]/i, 'R')
  const replacesFirstLetterOfEstatisticaToUppercase = replacesFirstLetterOfReportToUppercase.replace('estatisticos', ' Estatisticos - ')
  const textTreatyReport = replacesFirstLetterOfEstatisticaToUppercase
  const role = localStorage.getItem('relatorio.role')

  async function deleteReport(): Promise<void> {
    await api.delete(`/relatorio`, {
      params: {
        file_id: fileId
      },
    })
  }

  return (
    <Styled.Container>
      <span>
        <p>{textTreatyReport}</p>
        <Styled.Icons>
          {role === 'admin' && (
            <img
              src='/icons/btn-delete.svg'
              alt='botao para deletar relatorio'
              onClick={() => deleteReport()}
            />
          )}
          <DownloadReport srcImage='/icons/btn-download.svg' altImage='botao para baixar relatorio' fileId={fileId} />
        </Styled.Icons>
      </span>
    </Styled.Container>
  )
}
