import { ReactNode } from 'react'

interface Props {
  /** Contents of the paragraph */
  children: ReactNode
}

/** Paragraph UI Component for displaying Text */
export default function Paragraph({ children }: Props) {
  return (
    <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{ children }</p>
  )
}
