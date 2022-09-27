import { Icon } from '../icons'
import * as Styled from './styled'

type ReportProps = {
  textReport: string
  fileId: string
}

export const Report = ({ textReport, fileId }: ReportProps) => {
  const removeingSpecialCharacters = textReport.replace(/[_.pdf]/g, '')
  const replacesFirstLetterOfReportToUppercase = removeingSpecialCharacters.replace(/[`^r`]/i, 'R')
  const replacesFirstLetterOfEstatisticaToUppercase = replacesFirstLetterOfReportToUppercase.replace('estatistica', ' Estatistico - ')

  const textTreatyReport = replacesFirstLetterOfEstatisticaToUppercase

  return (
    <Styled.Container>
      <span>
        <p>{textTreatyReport}</p>
        <Styled.Icons>
          <Icon srcImage='/icons/btn-download.svg' altImage='botao para baixar relatorio' fileId={fileId} />
        </Styled.Icons>
      </span>
    </Styled.Container>
  )
}
