import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

/** Image UI Component */
const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`${basePath || ''}${src}`} {...rest} />
)

export default Image
