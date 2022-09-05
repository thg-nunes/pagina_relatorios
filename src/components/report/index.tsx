import { Icon } from '../icons/print'
import * as Styled from './styled'

type ReportProps = {
  textReport: string
}

export const Report = ({ textReport }: ReportProps) => {
  return (
    <Styled.Container>
      <span>
        <p>{textReport}</p>
        <Styled.Icons>
          <Icon srcImage='/icons/btn-download.svg' altImage='botao para baixar relatorio' />
          <Icon srcImage='/icons/btn-print.svg' altImage='botao para tirar um print do relatorio' />
        </Styled.Icons>
      </span>
    </Styled.Container>
  )
}
