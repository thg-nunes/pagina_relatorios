import Image from 'next/image'
import { DownloadReport } from '../icons'
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
          <Image width='25px' height='25px' src='/icons/btn-delete.svg' alt='botao para deletar relatorio' onClick={() => {
            // executar de forma assincrona a deleção do arquivo com o fileId
          }} />
          <DownloadReport srcImage='/icons/btn-download.svg' altImage='botao para baixar relatorio' fileId={fileId} />
        </Styled.Icons>
      </span>
    </Styled.Container>
  )
}
