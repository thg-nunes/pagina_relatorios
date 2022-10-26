import Image from "next/image"
import styled from 'styled-components';

type DownloadReportProps = {
  srcImage: string
  altImage: string
  fileId?: string
}


export const Container = styled.span`
  img {
    cursor: pointer;
    transition: 150ms all ease-in-out;
    :hover {
      filter: brightness(.95);
    }
  }
`

export const DownloadReport = ({ altImage, srcImage, fileId }: DownloadReportProps) => {
  return (
    <Container>
      <Image src={srcImage} alt={altImage} width='25px' height='25px' onClick={() => {
        window.open(`${process.env.NEXT_PUBLIC_API_HOST}/relatorios/${fileId}`)
      }} />
    </Container>
  )
}
