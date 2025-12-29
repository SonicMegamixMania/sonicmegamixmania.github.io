import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from "react-scroll-parallax"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useEffect } from 'react';

import sonicMegamixLogo from "../assets/logo.png"
import screenshot1 from "../assets/screenshot_1.jpg"
import screenshot2 from "../assets/screenshot_2.jpg"
import screenshot3 from "../assets/screenshot_3.jpg"
import screenshot5 from "../assets/screenshot_5.jpg"

 const Home = () => {
  const scrollingBar = () => {
    return (
      <div className="backgroundLayer repeatBGLayer
                      bg-[url(/BARS.png)] scrolling-background-2 
                      h-12 -translate-y-[23px]"
      />
    )
  }

  const buttonGradient = (text: string = "") => {
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

  const screenshotWithText = (capitalizedFirstPhrase: string = "", text: string = "", screenshot: string = "") => {
    return (
      <div className="relative z-50 pt-30 pl-10 pr-10 m-auto max-w-[1750px] 
                      flex flex-row items-center">
        <div className="mr-auto ml-auto pl-5 w-full max-w-[875px]">
            <p className="text-justify">
              <span className="uppercase text-4xl">{capitalizedFirstPhrase}</span>{text}
            </p>
        </div>

        <div className="w-full" data-aos="fade-up">
          <img className="w-full pl-20
                          transition-all duration-300 hover:cursor-pointer  
                          drop-shadow-[10px_10px_0px_rgba(1,1,1,0.7)]
                          hover:drop-shadow-[10px_10px_0px_rgba(1,1,1,1)]
                          scale-100 hover:scale-105"
            src={screenshot} 
          />
        </div>
      </div>
    )
  }

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="m-auto text-white font-outfit text-2xl 2xl:text-3xl">
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
          {buttonGradient("Download")}
        </div>
      </div>

      {/* Blue info section */}
      <div className="relative min-h-screen h-full bg-[#2b60c9]">
        { scrollingBar() }
        
        {/* YouTube Video and Text Two Columns*/}
        <div className="relative z-50 pt-60 pl-10 pr-10 m-auto max-w-[1750px] 
                        flex flex-row items-center">
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

          <div className="w-full pl-7">
              <p className="text-justify">
                <span className="text-4xl uppercase">Sonic Megamix Mania</span> is a fan-made modification for Sonic Mania Plus that aims to carry the torch of the discontinued ROM hack known as “Sonic the Hedgehog Megamix”. Megamix Mode adapts concepts from the ROM hack combined with the team's own vision bringing a unique experience built upon the foundation of the original. Classic Mode is a faithful remake of the content from “V.4.0b” of the ROM hack that offers a familiar experience with a fresh coat of paint. Sonic Megamix Mania offers beginner friendly and challenging experiences for old and new fans alike.<br/><br/>We plan to offer future updates to the project so follow our socials and be sure to stay tuned!
              </p>
          </div>
        </div>

        {/* Story Text with Screenshots Two Columns*/}
        <div className="pt-30"/>
        {screenshotWithText(
          "5 months have passed ", "since Sonic the Hedgehog's previous plight against the nefarious Dr. Eggman. Ever since their first conflict the two sides have been battling constantly, with victory being just out of Eggman's grasp. However, after years of fighting Eggman had vanished after the incident on Space Colony Ark, leaving the world safely in Sonic’s hands - or so it was thought.",
          screenshot1
        )}
        {screenshotWithText(
          "", "During this time of peace, the Chaotix discover a paper trail of blueprints to be built on an Island known as the Chiral Peninsula. These plans have Eggman’s name written all over them, requiring the power source of the Chaos Rings or Master Emerald. In his solidarity, Eggman was able to make a ton of breakthroughs using his research from Newtrogic Island. Now he is able to create robots that use positive ring energy as their power source, helping him stay under the radar of Sonic and G.U.N. ",
          screenshot2
        )}
        {screenshotWithText(
          "", "With this information in hand, Mighty calls upon his good friend Ray to warn Sonic the Hedgehog and Knuckles the Echidna about their lead on Eggman. In this rare time of freedom, the flickies are able to repay their debt to Sonic after the events on Flicky Island. They prevent Eggman from using the Chaos rings, breaking them down into a plethora of blue, red, and yellow rings scattered throughout dimensions.",
          screenshot3
        )}
        {screenshotWithText(
          "", "Without hesitation Sonic and friends travel to the Chiral Peninsula. As Ray drops them off one by one, he discovers an unconscious figure that looks similar to Sonic. Unbeknownst to Ray, he reawakens Shadow the Hedgehog. Without any recollection of his past, Ray decides to drop him off at the peninsula but as they approach, Shadow spots Eggman and orders Ray to chase him down. While it may just be intuition, Shadow feels the need to reclaim a sense of vengeance and recover his memories.",
          screenshot5
        )}
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
      <div className="relative  h-screen bg-[#2b60c9]">
        <div className="absolute inset-0 bg-[url(/BG_8.png)] bg-size-[1500px_auto] bg-repeat bg-top"/>
      </div>

      {/* Grey section parallax */}
      <div className="relative h-screen bg-[#484868]">
        {/* Scrolling bar */}
        { scrollingBar() }
      </div>
    </div>
  )
}

export default Home