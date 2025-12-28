import { Parallax } from "react-scroll-parallax"
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import 'animate.css';


import sonicMegamixLogo from "../assets/logo.png"

 const Home = () => {
  {/* Lenis (smooth mouse scroll) configuration */}
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: true,
      smoothWheel: true,
      infinite: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className=" m-auto">
      <div className="relative w-full h-screen bg-fixed overflow-hidden bg-[#1938cf]">
        {/* Hill and water backgrounds */}
        <div className="backgroundLayer bg-[url(/BG_1.png)] scrolling-background-1"/>
        <div className="backgroundLayer bg-[url(/BG_2.png)]"/>
        <div className="backgroundLayer bg-[url(/BG_3.png)]"/>
        <div className="backgroundLayer bg-[url(/BG_4.png)] scrolling-background-2"/>
        <div className="backgroundLayer bg-[url(/BG_5.png)] scrolling-background-3"/>
        <div className="backgroundLayer bg-[url(/BG_6.png)] scrolling-background-4"/>

        
        <div className="relative w-full h-full flex flex-col flex-wrap justify-center content-center items-start">
          {/* Logo */}
          <img className="w-[550px] 2xl:w-[880px] animate__animated animate__fadeInDown" src={sonicMegamixLogo} />

          {/* Download button */}
          <div className="group mt-auto mb-20 ml-auto mr-auto font-bbh
                          text-white text-shadow-[0_5px_0px_rgb(0_0_0/_0.55)]">
            <div className="p-1.5 rounded-4xl group-hover:rounded-2xl transition-all duration-300
                            bg-[#20327b] drop-shadow-[7px_7px_0px_rgba(1,1,1,1)]">
              <div className="p-1.5 rounded-4xl group-hover:rounded-2xl transition-all duration-300
                              bg-linear-to-t from-[#203582] via-[#8388cc] to-[#d0cfed]">
                <div className="text-3xl 2xl:text-6xl p-5
                                rounded-4xl group-hover:rounded-2xl transition-all duration-300 hover:cursor-pointer
                                bg-linear-to-t from-[#d0cfed] via-[#8388cc] to-[#203582]">
                  DOWNLOAD
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Blue info section */}
      <div className="relative h-screen bg-[#2b60c9]">
        {/* Scrolling bar */}
        <div className="backgroundLayer bg-[url(/BARS.png)] scrolling-background-2 h-12 -translate-y-[23px]"/>
      </div>

      {/* Rocky section vertical parallax */}
      <div className="relative  h-screen bg-[#2b60c9]">
        <Parallax speed={-10} className="absolute inset-0">
          <div className="backgroundLayer bg-[url(/BG_7.png)] -translate-y-[-50px]"/>
        </Parallax>

        <Parallax speed={5} className="absolute inset-0">
          <div className="backgroundLayer bg-[url(/BG_8_1.png)] -translate-y-[-50px]"/>
        </Parallax>
      </div>

      {/* Rocky info parallax */}
      <div className="relative  h-screen bg-[#2b60c9]">
        <div className="absolute inset-0 bg-[url(/BG_8.png)] bg-size-[1500px_auto] bg-repeat bg-top"/>
      </div>

      {/* Grey section parallax */}
      <div className="relative h-screen bg-[#484868]">
        {/* Scrolling bar */}
        <div className="backgroundLayer bg-[url(/BARS.png)] scrolling-background-2 h-12 -translate-y-[23px]"/>
      </div>
    </div>
  )
}

export default Home