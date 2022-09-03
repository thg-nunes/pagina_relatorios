import Image from "next/image"

type IconProps = {
  srcImage: string
  altImage: string
}

export const Icon = ({ altImage, srcImage }: IconProps) => {
  return (
    <Image src={srcImage} alt={altImage} width='25px' height='25px' />
  )
}
