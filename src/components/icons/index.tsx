import Image from "next/image"
import styled from 'styled-components';

type IconProps = {
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

export const Icon = ({ altImage, srcImage, fileId }: IconProps) => {
  return (
    <Container>
      <Image src={srcImage} alt={altImage} width='28px' height='28px' onClick={() => {
        window.open(`${process.env.URL_API}/relatorio/${fileId}`)
      }} />
    </Container>
  )
}
