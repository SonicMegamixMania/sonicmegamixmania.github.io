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
          <div className="absolute inset-0 bg-[url(/BG_1.png)] bg-size-[1500px_auto] bg-bottom bg-repeat-x scrolling-background-1"></div>
          <div className="absolute inset-0 bg-[url(/BG_2.png)] bg-size-[1500px_auto] bg-bottom bg-no-repeat"></div>
          <div className="absolute inset-0 bg-[url(/BG_3.png)] bg-size-[1500px_auto] bg-bottom bg-repeat-x"></div>
          <div className="absolute inset-0 bg-[url(/BG_4.png)] bg-size-[1500px_auto] bg-bottom bg-repeat-x scrolling-background-2"></div>
          <div className="absolute inset-0 bg-[url(/BG_5.png)] bg-size-[1500px_auto] bg-bottom bg-repeat-x scrolling-background-3"></div>
          <div className="absolute inset-0 bg-[url(/BG_6.png)] bg-size-[1500px_auto] bg-bottom bg-repeat-x scrolling-background-4"></div>
        </div>
      </div>

      {/* Blue info section */}
      <div className="relative h-screen bg-[#2b60c9]">
        {/* Scrolling bar */}
        <div className="-translate-y-[23px] w-full h-12 bg-[url(/BARS.png)] bg-size-[1500px_auto] bg-repeat-x scrolling-background-2"> </div>
      </div>

      {/* Rocky section parallax */}
      <div className="relative  h-screen bg-[#2b60c9]">
        <Parallax speed={-10} className="absolute inset-0">
          <div className="-translate-y-[-50px] w-full h-screen bg-[url(/BG_7.png)] bg-[length:1500px_auto] bg-bottom bg-repeat-x bg-scroll" />
        </Parallax>

        <Parallax speed={5} className="absolute inset-0">
          <div className="-translate-y-[-50px] w-full h-screen bg-[url(/BG_8_1.png)] bg-[length:1500px_auto] bg-bottom bg-repeat-x bg-scroll" />
        </Parallax>
      </div>

      {/* Rocky info parallax */}
      <div className="relative  h-screen bg-[#2b60c9]">
        <div className="absolute inset-0 bg-[url(/BG_8.png)] bg-size-[1500px_auto] bg-repeat bg-top"></div>
      </div>

      {/* Grey section parallax */}
      <div className="relative h-screen bg-[#484868]">
        {/* Scrolling bar */}
        <div className="-translate-y-[23px] w-full h-12 bg-[url(/BARS.png)] bg-size-[1500px_auto] bg-repeat-x scrolling-background-2"> </div>
      </div>
    </div>
  )
}

export default Home