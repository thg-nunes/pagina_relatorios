import Image from "next/image"
import styled from 'styled-components';

type IconProps = {
  srcImage: string
  altImage: string
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

export const Icon = ({ altImage, srcImage }: IconProps) => {
  return (
    <Container>
      <Image src={srcImage} alt={altImage} width='25px' height='25px' />
    </Container>
  )
}
