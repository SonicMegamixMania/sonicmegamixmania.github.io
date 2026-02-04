import { type ReactNode } from 'react'

interface TextCharDecorProps {
  char?: string,
  children?: ReactNode
}

const TextCharDecor = ({char="sonic", children}:TextCharDecorProps) => {
  let classText = ""

  switch (char) {
    case "sonic":
      classText = "text-[#0000cc] [-webkit-text-stroke:1.5px_#f8a838]"
      break;
    case "knuckles":
      classText = "text-[#ea193b] [-webkit-text-stroke:1.5px_#00ab4f]"
      break;
    case "eggman":
      classText = "text-[#b01010] [-webkit-text-stroke:1.5px_#FFFFFF]"
      break;
    case "chaotix":
      classText = "text-[#782ce6] [-webkit-text-stroke:1.5px_#54f978]"
      break;
    case "mighty":
      classText = "text-[#b01010] [-webkit-text-stroke:1.5px_#200040]"
      break;
    case "ray":
      classText = "text-[#f09000] [-webkit-text-stroke:1.5px_#b00000]"
      break;
    case "shadow":
      classText = "text-[#000000] [-webkit-text-stroke:1.5px_#ff1212]"
      break;
    case "amy":
      classText = "text-[#ff4080] [-webkit-text-stroke:1.5px_#326f44]"
      break;
    case "sunnyshores":
      classText = "text-[#60CB29] [-webkit-text-stroke:1.5px_#E7D94D]"
      break;
    case "darkfort":
      classText = "text-[#2B3334] [-webkit-text-stroke:1.5px_#D2281C]"
      break;
    case "city":
      classText = "text-[#5B2315] [-webkit-text-stroke:1.5px_#200B6A]"
      break;
    case "mistym":
      classText = "text-[#DB8B80] [-webkit-text-stroke:1.5px_#1E4AE3]"
      break;
    case "starryn":
      classText = "text-[#0A9464] [-webkit-text-stroke:1.5px_#950BC1]"
      break;
    case "metallicb":
      classText = "text-[#6BB3E4] [-webkit-text-stroke:1.5px_#EBF212]"
      break;
    case "classicm":
      classText = "text-[#484868] [-webkit-text-stroke:1.5px_#9F9FE6]"
      break;
    default:
      break;
  }
  return (
    <span className={`mr-2 lg:mr-0 text-2xl lg:text-3xl 2xl:text-4xl font-bbh-heg uppercase text-shadow-[5px_5px_0px_rgb(0_0_0)] ${classText}`}>
      {children}
    </span>
  )
}

export default TextCharDecor