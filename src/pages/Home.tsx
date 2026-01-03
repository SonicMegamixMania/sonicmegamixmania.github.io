import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from "react-scroll-parallax"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useEffect, type ReactNode } from 'react';

import sonicMegamixLogo from "../assets/logo.png"
import monitor from "../assets/monitor.png"
import staticTV from "../assets/static.gif"
import screenshot1 from "../assets/screenshot_1.jpg"
import screenshot2 from "../assets/screenshot_2.jpg"
import screenshot3 from "../assets/screenshot_3.jpg"
import screenshot5 from "../assets/screenshot_5.jpg"
import sonic from "../assets/sonic.png"
import knuckles from "../assets/knuckles.png"
import tails from "../assets/tails.png"
import shadow from "../assets/shadow.png"
import mighty from "../assets/mighty.png"

const ScrollingBar = () => {
  return (
    <div className="backgroundLayer repeatBGLayer
                    bg-[url(/BARS.png)] scrolling-background-2 
                    h-12 -translate-y-[23px]"
    />
  )
}

interface ButtonProps {
  text: string;
}

const ButtonGradient = ({ text }: ButtonProps) => {
  return (
    <div className="group mt-auto mb-20 ml-auto mr-auto font-bbh
                    text-white text-shadow-[0_5px_0px_rgb(0_0_0/_0.55)]">
      <div className="p-1.5 rounded-4xl group-hover:rounded-2xl transition-all duration-300
                      bg-[#20327b] drop-shadow-[7px_7px_0px_rgba(1,1,1,1)]">
        <div className="p-1.5 rounded-4xl group-hover:rounded-2xl transition-all duration-300
                        bg-linear-to-t from-[#203582] via-[#8388cc] to-[#d0cfed]">
          <div className="text-3xl 2xl:text-6xl p-5 uppercase
                          rounded-4xl group-hover:rounded-2xl transition-all duration-300 hover:cursor-pointer
                          bg-linear-to-t from-[#d0cfed] via-[#8388cc] to-[#203582]">
            {text}
          </div>
        </div>
      </div>
    </div>
  )
}

interface PageColumnProps {
  children: ReactNode,
  firstColumn?: boolean
}

const PageColumn = ({ children, firstColumn=false }: PageColumnProps) => {
  return (
    <>
      {firstColumn && <div className="pt-30"/>}
      <div className="relative flex flex-col lg:flex-row items-stretch justify-center
                      z-50 pl-3 lg:pl-10 pr-3 lg:pr-10 pt-30 m-auto max-w-[1750px]">
        { children }
      </div>
    </>
  )
}

interface ScreenshotWithTextProps {
  capitalizedFirstPhrase?: string,
  text?: string,
  screenshot: string,
  firstColumn?: boolean,
  children?: ReactNode
}

const ScreenshotWithText = ( 
    {capitalizedFirstPhrase="", text="", screenshot, firstColumn=false, children}: ScreenshotWithTextProps) => {
  return (
    <PageColumn firstColumn={firstColumn}>
      <div className="mr-auto ml-auto lg:pl-5 lg:pr-20 w-full max-w-[875px]">
          <p className="text-center lg:text-justify">
            <span className="uppercase text-4xl">{capitalizedFirstPhrase}</span>{text}
            {children}
          </p>
      </div>
 
      <div className='w-full' data-aos="fade-up">
        <div className="flex items-center
                        drop-shadow-[10px_10px_0px_rgba(1,1,1,0.7)]
                        hover:drop-shadow-[10px_10px_0px_rgba(1,1,1,1)]
                        transition-all duration-300 hover:cursor-pointer
                        scale-100 hover:scale-105" >
          <img className="w-10 lg:min-w-25 scale-x-[-1]" src={monitor} />
          <div className='relative mt-5 lg:mt-0 min-w-0 border-[#272a32] border-3 lg:border-10'>
            <img
              src={screenshot} 
            />
            <img className="absolute inset-0 h-full w-full opacity-15"
              src={staticTV} 
            />
          </div>
          <img className="w-10 lg:min-w-25" src={monitor} />
        </div>
      </div>
    </PageColumn>
  )
}

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
    default:
      break;
  }
  return (
    <span className={`mr-2 lg:mr-0 text-3xl lg:text-4xl font-bbh-heg uppercase text-shadow-[5px_5px_0px_rgb(0_0_0)] ${classText}`}>
      {children}
    </span>
  )
}

interface CharShowcaseProps {
  charImg?: string,
  charNameDecor?: string,
  charName?: string,
  text?: string
  children?: ReactNode
}

const CharShowcase = ({charImg=sonic, charNameDecor="sonic", charName="", text="", children}: CharShowcaseProps) => {
  return (
    <div className='w-full max-w-[536px] min-h-[800px] flex-1  mr-5 '
          data-aos="zoom-in"
      >
      <div className="h-full p-5 bg-[#7ebf9d] border-[#d50015] text-black
                    border-8 drop-shadow-[0px_0px_20px_rgba(0,0,0,1)]
                    transition-all duration-300 scale-100 2xl:hover:scale-103">
        <img className='m-auto h-[400px] object-cover' src={charImg} />
        <TextCharDecor char={charNameDecor}>
          <p className='text-5xl 2xl:text-7xl text-center'>{charName}</p>
        </TextCharDecor>
        <p className='mt-5 text-lg 2xl:text-2xl text-justify'>
          {text}
          {children}
        </p>
      </div>
    </div>
  )
}

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="m-auto text-white font-outfit text-xl lg:text-2xl 2xl:text-3xl">
      <div className="relative w-full h-screen bg-fixed overflow-hidden bg-[#1938cf]">
        {/* Hill and water backgrounds */}
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_1.png)] scrolling-background-1"/>
        <div className="backgroundLayer bg-[url(/BG_2.png)]"/>
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_3.png)]"/>
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_4.png)] scrolling-background-2"/>
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_5.png)] scrolling-background-3"/>
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_6.png)] scrolling-background-4"/>
        
        <div className="relative w-full h-full flex flex-col flex-wrap justify-center content-center items-start">
          {/* Logo */}
          <img className="w-[550px] 2xl:w-[880px] animate__animated animate__fadeInDown" 
            src={sonicMegamixLogo} 
          />

          {/* Download button */}
          <ButtonGradient text='Download'/>
        </div>
      </div>

      {/* Blue info section */}
      <div className="relative min-h-screen h-full bg-[#2b60c9]">
        <ScrollingBar />
        
        {/* YouTube Video and Text Two Columns*/}
        <PageColumn firstColumn={true}>
          <div className="w-full
                          transition-all duration-300 hover:cursor-pointer 
                          drop-shadow-[-10px_10px_0px_rgba(1,1,1,0.7)]
                          hover:drop-shadow-[-10px_10px_0px_rgba(1,1,1,1)]"
                          data-aos="fade-right">
            <LiteYouTubeEmbed
              id="vY0y033-Gic"
              title="Sonic Megamix Trailer"
            />
          </div>

          <div className="w-full mt-10 lg:mt-0 lg:pl-7">
              <p className="text-center lg:text-justify">
                <span className="text-4xl uppercase">Sonic Megamix Mania</span> is a fan-made modification for Sonic Mania Plus that aims to carry the torch of the discontinued ROM hack known as “Sonic the Hedgehog Megamix”. Megamix Mode adapts concepts from the ROM hack combined with the team's own vision bringing a unique experience built upon the foundation of the original. Classic Mode is a faithful remake of the content from “V.4.0b” of the ROM hack that offers a familiar experience with a fresh coat of paint. Sonic Megamix Mania offers beginner friendly and challenging experiences for old and new fans alike.
                <br/><br/>
                We plan to offer future updates to the project so follow our socials and be sure to stay tuned!
              </p>
          </div>
        </PageColumn>

        {/* Story Text with Screenshots Two Columns*/}
        <ScreenshotWithText
          firstColumn={true}
          capitalizedFirstPhrase="5 months have passed " 
          screenshot={screenshot1}
        >
          since <TextCharDecor char="sonic">Sonic the Hedgehog's</TextCharDecor> previous plight against the nefarious <TextCharDecor char="eggman">Dr. Eggman.</TextCharDecor> Ever since their first conflict the two sides have been battling constantly, with victory being just out of Eggman's grasp. However, after years of fighting Eggman had vanished after the incident on Space Colony Ark, leaving the world safely in Sonic’s hands - or so it was thought.
        </ScreenshotWithText>
        <ScreenshotWithText 
          screenshot={screenshot2} 
        >
          During this time of peace, the <TextCharDecor char='chaotix'>Chaotix</TextCharDecor> discover a paper trail of blueprints to be built on an Island known as the Chiral Peninsula. These plans have Eggman’s name written all over them, requiring the power source of the Chaos Rings or Master Emerald. In his solidarity, Eggman was able to make a ton of breakthroughs using his research from Newtrogic Island. Now he is able to create robots that use positive ring energy as their power source, helping him stay under the radar of Sonic and G.U.N.
        </ScreenshotWithText>
        <ScreenshotWithText 
          screenshot={screenshot3} 
        >
          With this information in hand, <TextCharDecor char='mighty'>Mighty the Armadillo</TextCharDecor> calls upon his good friend <TextCharDecor char='ray'>Ray the Flying Squirrel</TextCharDecor> to warn Sonic the Hedgehog and <TextCharDecor char='knuckles'>Knuckles the Echidna</TextCharDecor> about their lead on Eggman. In this rare time of freedom, the flickies are able to repay their debt to Sonic after the events on Flicky Island. They prevent Eggman from using the Chaos rings, breaking them down into a plethora of blue, red, and yellow rings scattered throughout dimensions.
        </ScreenshotWithText>
        <ScreenshotWithText 
          screenshot={screenshot5}
        >
          Without hesitation Sonic and friends travel to the Chiral Peninsula. As Ray drops them off one by one, he discovers an unconscious figure that looks similar to Sonic. Unbeknownst to Ray, he reawakens <TextCharDecor char='shadow'>Shadow the Hedgehog</TextCharDecor>. Without any recollection of his past, Ray decides to drop him off at the peninsula but as they approach, Shadow spots Eggman and orders Ray to chase him down. While it may just be intuition, Shadow feels the need to reclaim a sense of vengeance and recover his memories.
        </ScreenshotWithText>
      </div>

      {/* Rocky section vertical parallax */}
      <div className="relative  h-screen bg-[#2b60c9]">
        <Parallax speed={-10} className="absolute inset-0">
          <div className="backgroundLayer repeatBGLayer bg-[url(/BG_7.png)] -translate-y-[-50px]"/>
        </Parallax>

        <Parallax speed={5} className="absolute inset-0">
          <div className="backgroundLayer repeatBGLayer bg-[url(/BG_8_1.png)] -translate-y-[-50px]"/>
        </Parallax>
      </div>

      {/* Rocky info parallax */}
      <div className="relative min-h-screen pb-30 bg-[#2b60c9]">
        <div className="absolute inset-0 bg-[url(/BG_8.png)] bg-size-[1500px_auto] bg-repeat bg-top"/>

        <PageColumn>
          <CharShowcase 
            charImg={sonic} 
            charNameDecor='sonic' 
            charName='Sonic'
            text='Sonic is a blue hedgehog who lives on planet Earth. He is always running all over the world at supersonic speeds, hence his name. He is carefree and relaxed but will never tolerate injustice, doing anything he can to help those in need. He also has a quick wit, a short temper, and a fairly cocky 
            attitude.'  
          />

          <CharShowcase 
            charImg={tails} 
            charNameDecor='ray' 
            charName='Tails'
            text="Miles, better known by his nickname ''Tails'', is Sonic's faithful sidekick. Despite being bullied for having two tails, he is able to use them to fly like a helicopter. Miles has a knack for machinery and has grown into a confident young fox thanks to Sonic!"  
          />

          <CharShowcase 
            charImg={knuckles} 
            charNameDecor='knuckles' 
            charName='Knuckles'
            text='Knuckles, named after his fists, is known for his red-hot temper. An inhabitant of Angel Island, and the last guardian of the Master Emerald. While he has shown much animosity to Sonic in the past, his encounters with Eggman and the Chaotix have caused him to become less gullible, establishing a true sense of who is friend and who is foe.'  
          />
        </PageColumn>

        <PageColumn firstColumn={false}>
          <CharShowcase 
            charImg={mighty} 
            charNameDecor='mighty' 
            charName='Mighty'
            text="Mighty is a red and black armadillo with a strong sense of justice. Despite being a vagabond, he has recently decided to assist Charmy, Vector, and Espio in forming the Chaotix detective agency for the time being. His thirst for adventure allows him to be in tune with the natural elements of Water, Fire, and Electricity. Thanks to his shell, Mighty is extremely durable, able to block any incoming projectiles. Just like his name implies, he's remarkably strong!"  
          />

          <CharShowcase 
            charImg={shadow} 
            charNameDecor='shadow' 
            charName='Shadow'
            text="Shadow is the ''ultimate life form'', created in an experiment by Professor Gerald Robotnik aboard the Space Colony ARK. His exact age isn't known, but he is assumed to be around 50 years old. Once hungry for revenge after the death of Maria, Gerald's granddaughter, he was able to remember his promise to her that he would protect humanity and put his life on the line to do so. Shadow was barely able to survive his fall into Earth’s atmosphere by preserving some energy through his secondary inhibitor ring. His memories would be lost however."
          />
        </PageColumn>
      </div>

      {/* Grey section parallax */}
      <div className="relative h-screen bg-[#484868]">
        {/* Scrolling bar */}
        <ScrollingBar />
      </div>
    </div>
  )
}

export default Home