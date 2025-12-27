import { Parallax } from "react-scroll-parallax"
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

 const Home = () => {
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
      {/* Hill and water backgrounds */}
      <div className="h-screen">
        <div className="relative w-full h-screen bg-fixed overflow-hidden bg-[#1938cf]">
          <div className="backgroundLayer bg-[url(/BG_1.png)] scrolling-background-1"/>
          <div className="backgroundLayer bg-[url(/BG_2.png)]"/>
          <div className="backgroundLayer bg-[url(/BG_3.png)]"/>
          <div className="backgroundLayer bg-[url(/BG_4.png)] scrolling-background-2"/>
          <div className="backgroundLayer bg-[url(/BG_5.png)] scrolling-background-3"/>
          <div className="backgroundLayer bg-[url(/BG_6.png)] scrolling-background-4"/>
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