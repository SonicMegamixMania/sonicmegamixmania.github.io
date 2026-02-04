import AOS from 'aos';
import { useEffect } from 'react'
import Footer from '../Components/Footer';
import ScrollingBar from '../Components/ScrollingBar';
import ButtonGradient from '../Components/ButtonGradient';
import ScreenshotWithText from '../Components/ScreenshotWithText';

import megamixtitle from "../assets/MegamixTitle.png"
import smm2019 from "../assets/SMM2019.png"
import smm2020 from "../assets/SMM2020.png"
import smm2023 from "../assets/SMM2023.png"

// Characters
import sonic from "../assets/sonic.png";
import tails from "../assets/tails.png";
import PageColumn from '../Components/PageColumn';
import TextCharDecor from '../Components/TextCharDecor';

interface PriorVersionProps {
  url: string,
  img: string,
  text: string
}

const PriorVersion = ({url, img, text} : PriorVersionProps) => {
  return (
    <div className='w-fit'>
      <a href={url} target='_blank'>
        <img className='w-fit drop-shadow-[10px_10px_0px_rgba(1,1,1,0.7)]
          hover:drop-shadow-[10px_10px_0px_rgba(1,1,1,1)]
          transition-all duration-300
          scale-100 hover:scale-105 max-h-[400px]' src={img}/>
        <p className='mt-5 text-center'>{text}</p>
      </a>
    </div>
  )
}

const Download = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="m-auto text-white font-outfit text-xl lg:text-xl 2xl:text-3xl">
      {/* Hill and water backgrounds */}
      <div className="relative w-full min-h-screen bg-fixed overflow-hidden">
        <div className='backgroundLayerBig bg-[#530e7a] brightness-85'/>
        <div className="backgroundLayerBig repeatBGLayer bg-[url(/BG_DW_1.png)] brightness-85"/>
        <div className="backgroundLayerBig bg-[url(/BG_DW_2.png)] brightness-85"/>
        
        <div className='relative w-full min-h-screen flex gap-10 flex-col lg:flex-row justify-center align-middle items-center '>
          <div>
            <img className='w-[500px] animate__animated animate__bounceInLeft' src={tails} />
          </div>
          
          {/* Download links */}
          <div className="text-center flex flex-col justify-center items-center animate__animated animate__bounceInDown ">
            <div className='w-fit'>
              <p className='mb-5 p-2 rounded-2xl border-5 font-bold bg-gray-200 text-black'>SONIC MEGAMIX MANIA v1.0</p>
              <ButtonGradient>
                <a href="">Download</a>
              </ButtonGradient>
            </div>

            <div className='w-fit'>
              <p className='mb-5 text-2xl p-2 rounded-2xl border-5 bg-gray-200 text-black'>Sonic Mania Mod Loader</p>
              <ButtonGradient>
                <span className='text-3xl'>
                  <a href="https://gamebanana.com/tools/6273" target="_blank">Download</a>
                </span>
              </ButtonGradient>
            </div>
          </div>

          <div>
            <img className='w-[500px] animate__animated animate__bounceInLeft' src={sonic} />
          </div>
        </div>
      </div>

      {/* Prior versions section */}
      <div className="relative min-h-screen h-full pb-10 bg-[#2b60c9]">
        <div className="absolute inset-0 bg-[url(/BG_DW_3.png)] bg-size-[1500px_auto] bg-repeat bg-top"/>
        <div className="absolute inset-0 bg-[url(/BG_DW_4.png)] bg-size-[1500px_auto] bg-repeat-x bg-bottom"/>
        <ScrollingBar />
        
        <ScreenshotWithText screenshot={megamixtitle} firstColumn={true} reverse={true}>
          <div className="growhidden 3xl:block 3xl:grow"/>
          <h2 className='uppercase text-6xl text-left'>Support the Original Rom Hack!</h2>
          <a className='underline' 
            href="https://info.sonicretro.org/Sonic_the_Hedgehog_Megamix">
            Play the one that started it all...
          </a>
          <div className="growhidden 3xl:block 3xl:grow"/>
        </ScreenshotWithText>

        {/* Prior versions */}
        <PageColumn firstColumn={true}>
          <div>
            {/* Text */}
            <div>
              {/* Title */}
              <div className='text-center mb-10'>
                <TextCharDecor char="ray">
                  <span className='lg:text-7xl'>PRIOR VERSIONS</span>
                </TextCharDecor>
              </div>

              {/* Text */}
              <div className='flex gap-10 mb-30'>
                <PriorVersion url="https://shc.zone/entries/contest2023/906" img={smm2023} text='2023' />
                <PriorVersion url="https://shc.zone/entries/contest2020/274" img={smm2020} text='2020' />
                <PriorVersion url="https://gamebanana.com/mods/47886" img={smm2019} text='2019' />
                
              </div>
            </div>
            </div>
          </PageColumn>
      </div>

      <Footer />
    </div>
  )
}

export default Download