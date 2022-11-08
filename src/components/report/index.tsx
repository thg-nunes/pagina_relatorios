import { Dispatch, SetStateAction, useState } from 'react'
import { _deleteReport } from '../../hooks/reports'
import { DownloadReport } from '../icons'
import { ConfimationAction } from '../pup-up/confirmation'
import * as Styled from './styled'

type ReportProps = {
  textReport: string
  fileId: string
  setStatusDeleteReport: Dispatch<SetStateAction<string>>
}

export const Report = ({ textReport, fileId, setStatusDeleteReport }: ReportProps) => {
  const [confirmDeleteAction, setConfirmDeleteAction] = useState(false)

  const removeingSpecialCharacters = textReport.replace(/[_.pdf]/g, '')
  const replacesFirstLetterOfReportToUppercase = removeingSpecialCharacters.replace(/[`^r`]/i, 'R')
  const replacesFirstLetterOfEstatisticaToUppercase = replacesFirstLetterOfReportToUppercase.replace('estatisticos', ' Estatisticos - ')
  const textTreatyReport = replacesFirstLetterOfEstatisticaToUppercase
  const role = localStorage.getItem('relatorio.role')

  return (
    <Styled.Container>
      {confirmDeleteAction && (
        <ConfimationAction
          text='Confirme para deletar o relatório.'
          actionConfirm={async () => {
            setConfirmDeleteAction(!confirmDeleteAction)
            await _deleteReport({setStatusDeleteReport, fileId})
          }}
          actionCancel={() => setConfirmDeleteAction(!confirmDeleteAction)}
        />
      )}
      <span>
        <p>{textTreatyReport}</p>
        <Styled.Icons>
          {role === 'admin' && (
            <img
              src='/icons/btn-delete.svg'
              alt='botao para deletar relatorio'
              onClick={() => setConfirmDeleteAction(!confirmDeleteAction)}
            />
          )}
          <DownloadReport srcImage='/icons/btn-download.svg' altImage='botao para baixar relatorio' fileId={fileId} />
        </Styled.Icons>
      </span>
    </Styled.Container>
  )
}
