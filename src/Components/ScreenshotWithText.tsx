import { type ReactNode } from 'react'
import PageColumn from './PageColumn'
import Screenshot from './Screenshot'

interface ScreenshotWithTextProps {
  capitalizedFirstPhrase?: string,
  text?: string,
  screenshot: string,
  firstColumn?: boolean,
  children?: ReactNode,
  reverse?: boolean
}

const ScreenshotWithText = ( 
    {capitalizedFirstPhrase="", text="", screenshot, firstColumn=false, reverse=false, children}: ScreenshotWithTextProps) => {
  return (
    <PageColumn firstColumn={firstColumn} reverse={reverse}>
      {/* Text */}
      <div className="mr-auto ml-auto lg:pl-10 lg:pr-20 w-full max-w-[875px] flex flex-row items-center">
          <p className="text-justify">
            <span className="uppercase text-2xl lg:text-3xl 2xl:text-4xl">{capitalizedFirstPhrase}</span>{text}
            {children}
          </p>
      </div>

      <Screenshot src={screenshot} />
    </PageColumn>
  )
}

export default ScreenshotWithText