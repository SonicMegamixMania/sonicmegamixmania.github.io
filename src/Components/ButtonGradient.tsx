import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

const ButtonGradient = ({ children }: ButtonProps) => {
  return (
    <div className="group mt-auto mb-10 ml-auto mr-auto font-bbh
                    text-white text-shadow-[0_5px_0px_rgb(0_0_0/_0.55)]">
      <div className="p-1.5 rounded-4xl group-hover:rounded-2xl transition-all duration-300
                      bg-[#20327b] drop-shadow-[7px_7px_0px_rgba(1,1,1,1)]">
        <div className="p-1.5 rounded-4xl group-hover:rounded-2xl transition-all duration-300
                        bg-linear-to-t from-[#203582] via-[#8388cc] to-[#d0cfed]">
          <div className="text-3xl 2xl:text-6xl p-5 uppercase flex
                          rounded-4xl group-hover:rounded-2xl transition-all duration-300 hover:cursor-pointer
                          bg-linear-to-t from-[#d0cfed] via-[#8388cc] to-[#203582]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonGradient