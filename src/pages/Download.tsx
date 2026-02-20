import AOS from 'aos';
import { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import ScrollingBar from '../Components/ScrollingBar';
import ButtonGradient from '../Components/ButtonGradient';
import ScreenshotWithText from '../Components/ScreenshotWithText';

import megamixtitle from "../assets/MegamixTitle.png"
import smm2019 from "../assets/SMM2019.png"
import smm2020 from "../assets/SMM2020.png"
import smm2023 from "../assets/SMM2023.png"

// Characters
import sonic from "../assets/sonic_cartoon.png";
import tails from "../assets/tails_cartoon.png";
import knuckles from "../assets/knuckles_cartoon.png";
import mighty from "../assets/mighty_cartoon.png";
import amy from "../assets/amy_cartoon.png";
import shadow from "../assets/shadow_cartoon.png";
import PageColumn from '../Components/PageColumn';
import TextCharDecor from '../Components/TextCharDecor';
import { Link } from 'react-router';

interface PriorVersionProps {
  url: string,
  img: string,
  text: string
}

const PriorVersion = ({url, img, text} : PriorVersionProps) => {
  return (
    <div className='w-fit' data-aos="fade-up">
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

  const options = [
    { value: '1.1', label: 'v1.1', link:"https://www.mediafire.com/file/7u2biykr365tpog/Sonic_Megamix_Mania_v1.1.rar/file", mirror1:"https://mega.nz/file/qAtzGDTR#VzY0U1yyDV4Z5NcblBRC9sOaOVt-sSEOpaHb7T37LfQ", mirror2:"http://codenamegamma.com/Sonic%20Megamix%20Mania%20v1.1.rar" },
    
    { value: '1.0', label: 'v1.0', link:"http://codenamegamma.com/SONIC%20MEGAMIX%20MANIA%20V1.0.zip", mirror1:"https://www.mediafire.com/file/m0v963dfvgjn98o/SONIC_MEGAMIX_MANIA_V1.0.zip/file", mirror2:"https://mega.nz/file/KMcmlDJY#pksaqfkZe0cfVFhFdIFQyA74HzlAB348HxdJe16VckA" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // 2. Find the full object that matches the selected value
    const targetValue = event.target.value;
    const foundOption = options.find(opt => opt.value === targetValue);
    
    if (foundOption) {
      setSelectedOption(foundOption);
    }
  };

  return (
    <div className="m-auto text-white font-outfit text-xl lg:text-xl 2xl:text-3xl">
      {/* Hill and water backgrounds */}
      <div className="relative w-full min-h-screen bg-fixed overflow-hidden">
        <div className='backgroundLayerBig bg-[#530e7a] brightness-85'/>
        <div className="backgroundLayerBig repeatBGLayer bg-[url(/BG_DW_1.png)] brightness-85"/>
        <div className="backgroundLayerBig bg-[url(/BG_DW_2.png)] brightness-85"/>
        
        <div className='relative w-full min-h-screen flex gap-10 flex-col lg:flex-row justify-center align-middle items-center '>
          <div className='w-[200px] xl:mr-30 animate__animated animate__bounceInLeft'>
            <img  src={sonic} />
            <img  src={mighty} />
            <img  src={shadow} />
          </div>
          
          {/* Download links */}
          <div className="text-center flex flex-col justify-center items-center animate__animated animate__bounceInDown ">
            <div className='w-fit'>
              <p className='mb-3 p-2 rounded-2xl border-5 font-bold bg-gray-200 text-black'>
                SONIC MEGAMIX MANIA
                <select className='bg-white rounded-2xl pl-2 ml-4 border-2'
                        id="downloadLinks" value={selectedOption.value} onChange={handleChange}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </p>
              <ButtonGradient>
                <a href={selectedOption.link}
                   target='_blank'>
                  Download
                </a>
              </ButtonGradient>
              <p className='-mt-5 mb-10'>
                <a className="pr-5 hover:underline" href={selectedOption.mirror1} target='_blank'>MIRROR 1</a>
                
                <a className="hover:underline" href={selectedOption.mirror2} target='_blank'>MIRROR 2</a>
              </p>
            </div>

            <div className='w-fit'>
              <p className='mb-3 text-2xl p-2 rounded-2xl border-5 bg-gray-200 text-black'>Sonic Mania Mod Loader</p>
              <ButtonGradient>
                <span className='text-3xl'>
                  <a href="https://gamebanana.com/tools/6273" target="_blank">Download</a>
                </span>
              </ButtonGradient>
            </div>

            <div className='w-fit'>
              <p className='mb-3 text-2xl p-2 rounded-2xl border-5 bg-gray-200 text-black'>Renders & Soundtrack</p>
              <ButtonGradient>
                <span className='text-3xl'>
                  <Link to="/assets">Download</Link>
                </span>
              </ButtonGradient>
            </div>
          </div>

          <div className='w-[200px] xl:ml-30 animate__animated animate__bounceInLeft'>
            <img  src={tails} />
            <img  src={knuckles} />
            <img  src={amy} />
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
            href="https://info.sonicretro.org/Sonic_the_Hedgehog_Megamix"
            target='_blank'>
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