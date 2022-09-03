import { Icon } from '../icons/print'
import * as Styled from './styled'

type ImageProps = {
  srcImage: string
  altImage: string
}

type ReportProps = {
  textReport: string
  downloadIcon: ImageProps
  printdIcon: ImageProps
}

export const Report = ({ textReport, downloadIcon, printdIcon }: ReportProps) => {
  return (
    <Styled.Container>
      <span>
        <p>{textReport}</p>
        <Styled.Icons>
          <Icon srcImage={downloadIcon.srcImage} altImage={downloadIcon.altImage} />
          <Icon srcImage={printdIcon.srcImage} altImage={printdIcon.altImage} />
        </Styled.Icons>
      </span>
    </Styled.Container>
  )
}
