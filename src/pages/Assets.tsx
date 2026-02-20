import { Link } from "react-router"
import ButtonGradient from "../Components/ButtonGradient"
import ScrollingBar from "../Components/ScrollingBar"
import TextCharDecor from "../Components/TextCharDecor"

const Assets = () => {
  return (
    <div className="relative min-h-screen flex flex-wrap content-center bg-[#484868] text-white">
      <ScrollingBar /> 
      <div className="w-full mt-10 lg:mt-0 z-50 pl-3 lg:pl-10 pr-3 lg:pr-10 pt-30 pb-30 m-auto max-w-[1000px]">
        {/* Renders */}
        <div>
          <div className='text-center mb-10'>
            <TextCharDecor char="ray">
              <span className='lg:text-7xl'>Renders</span>
            </TextCharDecor>
          </div>

          <div className='text-center flex w-fit gap-5 m-auto'>
            <ButtonGradient>
              <span className='lg:text-3xl'>
                <a href="https://drive.google.com/drive/u/0/folders/1k2T1dv-Gubm46gr6fzcPYBG2jUZtZoR1"
                    target='_blank'>
                  CHARACTERS
                </a>
              </span>
            </ButtonGradient>

            <ButtonGradient>
              <span className='lg:text-3xl'>
                <a href="https://drive.google.com/drive/u/0/folders/1VGpuQfjstpjOO-5Tp_Fp9miEgCjupGGj"
                    target='_blank'>
                  Level Maps
                </a>
              </span>
            </ButtonGradient>
          </div>
        </div>

        {/* Download */}
        <div className="mt-15">
          <div className='text-center mb-10'>
            <TextCharDecor char="sonic">
              <span className='lg:text-7xl'>OST Download</span>
            </TextCharDecor>
          </div>

          <div className='text-center flex w-fit gap-5 m-auto'>
            <ButtonGradient>
              <span className='lg:text-3xl'>
                <a href="https://drive.google.com/file/d/14lIrfJg8UKQM3kXyGuK02ZCwgZv2w8Zg/view"
                    target='_blank'>
                  FLAC
                </a>
              </span>
            </ButtonGradient>

            <ButtonGradient>
              <span className='lg:text-3xl'>
                <a href="https://drive.google.com/file/d/1P3PnFqPDZGSo5wInsocgPapv8GEElDfL/view"
                    target='_blank'>
                  MP3
                </a>
              </span>
            </ButtonGradient>
          </div>
        </div>

        {/* YouTube */}
        <div className='mt-15'>
          <div className='text-center mb-10'>
            <TextCharDecor char="eggman">
              <span className='lg:text-7xl'>YouTube</span>
            </TextCharDecor>
          </div>

          <div className='text-center flex gap-5'>
            <ButtonGradient>
              <span className='lg:text-3xl'>
                <a href="https://www.youtube.com/playlist?list=PLQuRF-JiGI_DuyolBxErqj7zvxtn9pHwF"
                  target='_blank'>
                PLAYLIST
                </a>
              </span>
            </ButtonGradient>

            <ButtonGradient>
              <span className='lg:text-3xl'>
                <a href="https://www.youtube.com/watch?v=PLczSH9Du7g"
                    target='_blank'>
                  FULL ALBUM
                </a>
              </span>
            </ButtonGradient>
          </div>
        </div>

        {/* YouTube */}
        <div className='mt-15'>
          <div className='text-center mb-10'>
            <TextCharDecor char="amy">
              <span className='lg:text-7xl'>Other Platforms</span>
            </TextCharDecor>
          </div>

          <div className='text-center flex flex-col'>
            <ButtonGradient>
              <span className='lg:text-3xl'>
                <a href="https://soundcloud.com/sonic-megamix-mania/sets/re-discovery"
                    target='_blank'>
                  SOUNDCLOUD
                </a>
              </span>
            </ButtonGradient>
          </div>
        </div>

        <div className='text-center mt-30'>
          <Link className="text-4xl underline" to="/download">R E T U R N</Link>
        </div>
      </div>
    </div>
  )
}

export default Assets