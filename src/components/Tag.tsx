import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  /** Capitalised and spaces replaced with hyphens */
  text: string
}

/** Tag Slug UI Component */
const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
