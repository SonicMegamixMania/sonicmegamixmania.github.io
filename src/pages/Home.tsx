// Libraries
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from "react-scroll-parallax"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useEffect, type ReactNode } from 'react';
//import Countdown from 'react-countdown';

// Components
import ScrollingBar from '../Components/ScrollingBar';
import Footer from '../Components/Footer';
import ButtonGradient from '../Components/ButtonGradient';
import PageColumn from '../Components/PageColumn';
import ScreenshotWithText from '../Components/ScreenshotWithText';
import Screenshot from '../Components/Screenshot';

// Misc
import sonicMegamixLogo from "../assets/logo.png"

// Screenshots
import screenshot1 from "../assets/screenshot_1.jpg"
import screenshot2 from "../assets/screenshot_2.jpg"
import screenshot3 from "../assets/screenshot_3.jpg"
import screenshot5 from "../assets/screenshot_5.jpg"
import screenshotSSZ from "../assets/SSZ.png"
import screenshotSNZ from "../assets/SNZ.png"
import screenshotCOZ from "../assets/COZ.png"
import screenshotDFZ from "../assets/DFZ.png"
import screenshotMBZ from "../assets/MBZ.png"
import screenshotMMZ from "../assets/MMZ.png"
import challenge1 from "../assets/challenge1.png"
import challenge2 from "../assets/challenge2.png"
import challenge3 from "../assets/challenge3.png"
import challenge4 from "../assets/challenge4.png"
import classic1 from "../assets/classic1.png"
import classic2 from "../assets/classic2.png"
import classic3 from "../assets/classic3.png"
import classic4 from "../assets/classic4.png"

// Characters
import sonic from "../assets/sonic.png"
import knuckles from "../assets/knuckles.png"
import tails from "../assets/tails.png"
import shadow from "../assets/shadow.png"
import mighty from "../assets/mighty.png"
import amy from "../assets/amy.png"
import TextCharDecor from '../Components/TextCharDecor';
import { Link } from 'react-router';

interface CharShowcaseProps {
  charImg?: string,
  charNameDecor?: string,
  charName?: string,
  text?: string
  children?: ReactNode
}

const CharShowcase = ({charImg=sonic, charNameDecor="sonic", charName="", text="", children}: CharShowcaseProps) => {
  return (
    <div className='w-full max-w-[536px] min-h-[800px] flex-1 mr-5 pt-10 lg:pt-0 '
          data-aos="zoom-in"
      >
      <div className="h-full p-5 bg-[#7ebf9d] border-[#d50015] text-black
                    border-8 drop-shadow-[0px_0px_20px_rgba(0,0,0,1)]
                    transition-all duration-300 scale-100 2xl:hover:scale-103">
        <img className='m-auto h-[400px] object-contain' src={charImg} />
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

//const TARGET_DATE = new Date(1770390000 * 1000);

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="m-auto text-white font-outfit text-xl lg:text-xl 2xl:text-3xl">
      {/* Hill and water backgrounds */}
      <div className="relative w-full h-screen bg-fixed overflow-hidden bg-[#1938cf]">
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_1.png)] scrolling-background-1"/>
        <div className="backgroundLayer bg-[url(/BG_2.png)]"/>
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_3.png)]"/>
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_4.png)] scrolling-background-2"/>
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_5.png)] scrolling-background-3"/>
        <div className="backgroundLayer repeatBGLayer bg-[url(/BG_6.png)] scrolling-background-4"/>
        
        <div className="relative w-full h-full text-center flex flex-col flex-wrap justify-center content-center items-start">
          <div className="growhidden 3xl:block 3xl:grow"/>
          {/* Logo */}
          <img className="w-[550px] 2xl:w-[880px] animate__animated animate__fadeInDown" 
            src={sonicMegamixLogo} 
          />
          <div className="hidden 3xl:block 3xl:grow"/>

          {/* Download button */}
          <ButtonGradient><Link to="/download">DOWNLOAD</Link></ButtonGradient>
          <div className='mb-10'/>
        </div>
      </div>

      {/* Blue info section */}
      <div className="relative min-h-screen h-full pb-10 bg-[#2b60c9]">
        <ScrollingBar />
        
        {/* YouTube Video and Text Two Columns*/}
        <PageColumn firstColumn={true}>
          <div className="w-full
                          transition-all duration-300 hover:cursor-pointer 
                          drop-shadow-[-10px_10px_0px_rgba(1,1,1,0.7)]
                          hover:drop-shadow-[-10px_10px_0px_rgba(1,1,1,1)]"
                          data-aos="fade-right">
            <LiteYouTubeEmbed
              id="2JuRgiXiKJA"
              title="Sonic Megamix Trailer"
            />
          </div>

          <div className="w-full mt-10 lg:mt-0 lg:pl-7">
              <p className="text-justify">
                <span className="text-2xl lg:text-4xl uppercase">Sonic Megamix Mania</span> is a fan-made modification for Sonic Mania Plus that aims to carry the torch of the discontinued ROM hack known as “Sonic the Hedgehog Megamix”. Megamix Mode adapts concepts from the ROM hack combined with the team's own vision bringing a unique experience built upon the foundation of the original. Classic Mode is a faithful remake of the content from “V.4.0b” of the ROM hack that offers a familiar experience with a fresh coat of paint. Sonic Megamix Mania offers beginner friendly and challenging experiences for old and new fans alike.
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
          since <TextCharDecor char="sonic">Sonic the Hedgehog</TextCharDecor>'s previous plight against the nefarious <TextCharDecor char="eggman">Dr. Eggman</TextCharDecor>. Ever since their first conflict the two sides have been battling constantly, with victory being just out of Eggman's grasp. However, after years of fighting, Eggman had vanished after the incident on Space Colony ARK, leaving the world safely in Sonic’s hands - or so it was thought.
        </ScreenshotWithText>
        <ScreenshotWithText 
          screenshot={screenshot2} 
        >
          During this time of peace, the <TextCharDecor char='chaotix'>Chaotix</TextCharDecor> discover a paper trail of blueprints to be built on an Island known as the Chiral Peninsula. These plans have Eggman’s name written all over them, requiring the power source of the Chaos Rings or Master Emerald. In his solidarity, Eggman was able to make a ton of breakthroughs using his research from Newtrogic Island. Now he is able to create robots that use positive ring energy as their power source, helping him stay under the radar of Sonic and G.U.N.
        </ScreenshotWithText>
        <ScreenshotWithText 
          screenshot={screenshot3}
          reverse={true}
        >
          With this information in hand, <TextCharDecor char='mighty'>Mighty the Armadillo</TextCharDecor> calls upon his good friend <TextCharDecor char='ray'>Ray the Flying Squirrel</TextCharDecor> to warn Sonic the Hedgehog and <TextCharDecor char='knuckles'>Knuckles the Echidna</TextCharDecor> about their lead on Eggman. In this rare time of freedom, the flickies are able to repay their debt to Sonic after the events on Flicky Island. They prevent Eggman from using the Chaos rings, breaking them down into a plethora of blue, red, and yellow rings scattered throughout dimensions.
        </ScreenshotWithText>
        <ScreenshotWithText 
          screenshot={screenshot5}
          reverse={true}
        >
          Without hesitation Sonic and friends travel to the Chiral Peninsula. As Ray drops them off one by one, he discovers an unconscious figure that looks similar to Sonic. Unbeknownst to Ray, he reawakens <TextCharDecor char='shadow'>Shadow the Hedgehog</TextCharDecor>. Without any recollection of his past, Ray decides to drop him off at the peninsula but as they approach, Shadow spots Eggman and orders Ray to chase him down. While it may just be intuition, Shadow feels the need to reclaim a sense of vengeance and recover his memories.
        </ScreenshotWithText>
      </div>

      {/* Rocky section vertical parallax */}
      <div className="relative min-h-screen bg-[#2b60c9]">
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
            text='Named after his fierce fists that define his fighting style, Knuckles the Echidna is a hot-tempered inhabitant of Angel Island, the last guardian of the Master Emerald. As the last of his race, he bears the weight of a duty that often keeps him isolated from the world below. While he once viewed Sonic with deep-seated animosity, his history of being deceived by Eggman, as well as his time leading the Chaotix, has tempered his legendary gullibility.'
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

          <CharShowcase 
            charImg={amy} 
            charNameDecor='amy' 
            charName='Amy'
            text="Amy Rose, formerly known as “Rosy the Rascal” is a pink hedgehog with a strong admiration for Sonic. Amy loves fashion, performing tarot card readings, and helping those in need. After being rescued by Sonic from Metal Sonic on Little Planet, she uses her Piko Piko Hammer to defend herself and assist her friends. Her compassion is what allowed Shadow to briefly set aside his quest for revenge and continues to inspire others across her adventures. Feeling nostalgic, she decided to wear an old favorite outfit of hers as she travels along with Sonic on his new adventure."
          />
        </PageColumn>
      </div>

      {/* Grey section parallax */}
      <div className="relative min-h-screen pb-60 bg-[#484868]">
        {/* Scrolling bar */}
        <ScrollingBar />

        {/* Level Text with Screenshots Two Columns*/}
        <ScreenshotWithText
          firstColumn={true}
          screenshot={screenshotSSZ}
        >
          <TextCharDecor char="sunnyshores">
            <span className='lg:text-6xl'>Sunny Shores</span>
          </TextCharDecor>
          <br/>
          Welcome to Sunny Shores! The ideal vacation spot with warm sand, cool surf, and hot sun. Unfortunately there’s no time to waste! Dash through the soft sand and lush grass to make your way towards Eggman. Hurry before it’s too late!
        </ScreenshotWithText>

        <ScreenshotWithText
          firstColumn={true}
          screenshot={screenshotDFZ}
        >
          <TextCharDecor char="darkfort">
            <span className='lg:text-6xl'>Dark Fortress</span>
          </TextCharDecor>
          <br/>
          A tranquil, mysterious, yet dangerous castle lost in time. Legend has it that an ancient race once occupied these mountains until one day they all vanished. They held the secrets behind the rings and held vast knowledge of their power. Watch out though, plenty of traps remain guarding the fortress.
        </ScreenshotWithText>

        <ScreenshotWithText
          firstColumn={true}
          reverse={true}
          screenshot={screenshotCOZ}
        >
          <TextCharDecor char="city">
            <span className='lg:text-6xl'>City Outskirts</span>
          </TextCharDecor>
          <br/>
          Just outside of Luminous city, you find yourself in its luminous suburbs! Barely populated, yet still bustling with constant fairs, attractions. Around every corner you’ll find many vendors, offering food, balloons, you name it! A highlight for the night life, however, if I were you, I’d be careful. It seems Eggman is plotting something nefarious in these areas. 
        </ScreenshotWithText>

        <ScreenshotWithText
          firstColumn={true}
          reverse={true}
          screenshot={screenshotMMZ}
        >
          <TextCharDecor char="mistym">
            <span className='lg:text-6xl'>Misty Maze</span>
          </TextCharDecor>
          <br/>
          Misty Maze, a bay containing an abandoned city flooded long ago. Now it is being converted into an Oil Rig for Eggman to make use of. Yuck! Make your way out of here before Eggman completes his plans, that is if you can even find a way out. 
        </ScreenshotWithText>

        <ScreenshotWithText
          firstColumn={true}
          screenshot={screenshotSNZ}
        >
          <TextCharDecor char="starryn">
            <span className='lg:text-6xl'>Starry Night</span>
          </TextCharDecor>
          <br/>
          The heart of Luminous city, this is where people like to spend most of their free time when they're not on the outskirts of the city. This week you can expect to see the starlight festival, a night of fun filled with flashing lights and fireworks! 
        </ScreenshotWithText>

        <ScreenshotWithText
          firstColumn={true}
          screenshot={screenshotMBZ}
        >
          <TextCharDecor char="metallicb">
            <span className='lg:text-6xl'>Metallic Base</span>
          </TextCharDecor>
          <br/>
          In the middle of the city lies Eggman’s base of operation. Here Eggman tests his latest and greatest inventions and harnesses the chaotic energy from rings to power his newest badniks. Be careful though, it seems like Eggman is taking no risks and is on red alert. It wouldn’t be surprising if he decided to take some drastic measures to take care of you…
        </ScreenshotWithText>
      </div>

      {/* Dark Brown section parallax */}
      <div className="relative min-h-screen pb-60 bg-[#14030d]">
        {/* Scrolling bar */}
        <ScrollingBar />

        {/* Classic mode */}
        <PageColumn>
          <div>
            {/* Text */}
            <div>
              {/* Title */}
              <div className='text-center mb-10'>
                <TextCharDecor char="classicm">
                  <span className='lg:text-7xl'>CLASSIC MODE</span>
                </TextCharDecor>
              </div>

              {/* Text */}
              <p className='text-justify max-w-[1200px] m-auto'>Re-Experience the ROM-Hack that started it all! In Classic Mode, you can play through faithful remakes of the Original ‘Sonic the Hedgehog Megamix’ Zones, complete with 3 Acts, each! Mashing up the best of what 4.0b & 5.0a had to offer, with the addition of revamped visuals & music, it’s sure to be a treat to newcomers and Megamix veterans alike!</p>
            </div>

            {/* Screenshots */}
            <div className='flex flex-col lg:flex-row lg:gap-20 lg:mt-20'>
              <div><Screenshot src={classic1}/></div>
              <div><Screenshot src={classic2}/></div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-20 lg:mt-20'>
              <div><Screenshot src={classic3}/></div>
              <div><Screenshot src={classic4}/></div>
            </div>
          </div>
        </PageColumn>

        {/* Challenge mode */}
        <PageColumn>
          <div>
            {/* Text */}
            <div>
              {/* Title */}
              <div className='text-center mb-10'>
                <TextCharDecor char="eggman">
                  <span className='lg:text-7xl'>CHALLENGE MODE</span>
                </TextCharDecor>
              </div>

              {/* Text */}
              <p className='text-justify max-w-[1200px] m-auto'>Have you already mastered Megamix Mode and still left wanting more? Look no further, Challenge Mode is here to offer you 13 Challenge Acts! Ranging from entirely new layouts/gimmicks, to fast paced gauntlets, and even some abstract obstacles, no two challenges are the same! Experience what each Megamix Mode acts feels like, when looking at them through a twisted mirror!</p>
            </div>

            {/* Screenshots */}
            <div className='flex flex-col lg:flex-row lg:gap-20 lg:mt-20'>
              <div><Screenshot src={challenge1}/></div>
              <div><Screenshot src={challenge2}/></div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-20 lg:mt-20'>
              <div><Screenshot src={challenge3}/></div>
              <div><Screenshot src={challenge4}/></div>
            </div>
          </div>
        </PageColumn>
        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home