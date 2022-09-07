import { Icon } from '../icons/print'
import * as Styled from './styled'

type ReportProps = {
  textReport: string
  fileId: string
}

export const Report = ({ textReport, fileId }: ReportProps) => {
  const removeingSpecialCharacters = textReport.replace(/[`_.pdf2022`]/g, ' ')
  const replacesFirstLetterOfReportToUppercase = removeingSpecialCharacters.replace(/[`^r`]/i, 'R')
  const replacesFirstLetterOfEstatisticaToUppercase = replacesFirstLetterOfReportToUppercase.replace('estatistica', 'Estatistica')

  const textTreatyReport = replacesFirstLetterOfEstatisticaToUppercase

  return (
    <Styled.Container>
      <span>
        <p>{textTreatyReport}</p>
        <Styled.Icons>
          <Icon srcImage='/icons/btn-download.svg' altImage='botao para baixar relatorio' fileId={fileId} />
          <Icon srcImage='/icons/btn-print.svg' altImage='botao para tirar um print do relatorio' />
        </Styled.Icons>
      </span>
    </Styled.Container>
  )
}
