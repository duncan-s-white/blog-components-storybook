import { Copy, Copied } from './icons'

const components = {
  copy: Copy,
  copied: Copied,
}

type Size = 6 | 8 | 32;

type IconProps = {
  kind: keyof typeof components
  size?: Size
}


const Icon = ({ kind, size = 8 }: IconProps) => {
  const IconSVG = components[kind]
  return <IconSVG className={`h-${size} w-${size}`} />
}

export default Icon
