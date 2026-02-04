import monitor from "../assets/monitor.png"
import staticTV from "../assets/static.gif"

interface ScreenshotProps {
  src: string,
}

const Screenshot = ({src} : ScreenshotProps) => {
  return (
    <div className='w-full' data-aos="fade-up">
      <div className="flex items-center
                      drop-shadow-[10px_10px_0px_rgba(1,1,1,0.7)]
                      hover:drop-shadow-[10px_10px_0px_rgba(1,1,1,1)]
                      transition-all duration-300
                      scale-100 hover:scale-105" >
        <img className="w-10 lg:min-w-25 scale-x-[-1]" src={monitor} />
        <div className='relative mt-5 lg:mt-0 min-w-0 border-[#272a32] border-3 lg:border-10'>
          <img
            src={src} 
          />
          <img className="absolute inset-0 h-full w-full opacity-15"
            src={staticTV} 
          />
        </div>
        <img className="w-10 lg:min-w-25" src={monitor} />
      </div>
    </div>
  )
}

export default Screenshot