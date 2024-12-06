import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  level?: 'h1' | 'h2'
}

export default function PageTitle({ children, level = 'h1' }: Props) {

  const classesH1 = "text-3xl sm:text-4xl md:text-5xl";
  const classesH2 = "text-2xl sm:text-3xl md:text-4xl";
  const classes = "font-extrabold sm:leading-10 md:leading-14 leading-9 tracking-tight text-gray-900 dark:text-gray-100 sb-npm"
  
  if(level == 'h2') return <h2 className={`${classesH2} ${classes}`}>{children}</h2>
  return <h1 className={`${classesH1} ${classes}`}>{children}</h1>
}
