import { type ReactNode } from 'react'

interface PageColumnProps {
  children: ReactNode,
  firstColumn?: boolean
  reverse?: boolean
}

const PageColumn = ({ children, firstColumn=false, reverse=false }: PageColumnProps) => {
  return (
    <>
      {firstColumn && <div className="lg:pt-30"/>}
      
      {reverse && <div className="relative flex flex-col lg:flex-row-reverse items-stretch justify-center
                      z-50 pl-3 lg:pl-10 pr-3 lg:pr-10 pt-30 m-auto max-w-[1750px]">
        { children }
      </div>}

      {!reverse && <div className="relative flex flex-col lg:flex-row items-stretch justify-center
                      z-50 pl-3 lg:pl-10 pr-3 lg:pr-10 pt-30 m-auto max-w-[1750px]">
        { children }
      </div>}
    </>
  )
}

export default PageColumn