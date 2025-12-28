import { Parallax } from "react-scroll-parallax"
import 'animate.css';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import sonicMegamixLogo from "../assets/logo.png"
import screenshot1 from "../assets/screenshot_1.jpg"
import screenshot2 from "../assets/screenshot_2.jpg"
import screenshot3 from "../assets/screenshot_3.jpg"
import screenshot5 from "../assets/screenshot_5.jpg"

 const Home = () => {
  return (
    <div className="m-auto text-white font-outfit 2xl:text-2xl">
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
      <div className="relative min-h-screen h-full bg-[#2b60c9]">
        {/* Scrolling bar */}
        <div className="backgroundLayer bg-[url(/BARS.png)] scrolling-background-2 h-12 -translate-y-[23px]"/>
        
        {/* YouTube Video and Text Two Columns*/}
        <div className="relative z-50 pt-60 pl-5 pr-5 m-auto max-w-[1750px] 
                        flex flex-row items-center">
          <div className="w-full">
            <LiteYouTubeEmbed
              id="vY0y033-Gic"
              title="Rick Astley - Never Gonna Give You Up"
            />
          </div>

          <div className="w-full pl-7">
              <p className="text-justify">
                <span className="text-4xl uppercase">Sonic Megamix Mania</span> is a fan-made modification for Sonic Mania Plus that aims to carry the torch of the discontinued ROM hack known as “Sonic the Hedgehog Megamix”. Megamix Mode adapts concepts from the ROM hack combined with the team's own vision bringing a unique experience built upon the foundation of the original. Classic Mode is a faithful remake of the content from “V.4.0b” of the ROM hack that offers a familiar experience with a fresh coat of paint. Sonic Megamix Mania offers beginner friendly and challenging experiences for old and new fans alike.<br/><br/>We plan to offer future updates to the project so follow our socials and be sure to stay tuned!
              </p>
          </div>
        </div>

        {/* Story Text with Screenshots Two Columns*/}
        <div className="relative z-50 pt-60 pl-5 pr-5 m-auto max-w-[1750px] 
                        flex flex-row items-center">
          <div className="mr-auto ml-auto pl-5 w-full max-w-[875px]">
              <p className="text-justify">
                <span className="text-4xl uppercase">5 months have passed</span> since Sonic the Hedgehog's previous plight against the nefarious Dr. Eggman. Ever since their first conflict the two sides have been battling constantly, with victory being just out of Eggman's grasp. However, after years of fighting Eggman had vanished after the incident on Space Colony Ark, leaving the world safely in Sonic’s hands - or so it was thought.
              </p>
          </div>

          <div className="w-full">
            <img className="w-full pl-20" src={screenshot1} />
          </div>
        </div>
        <div className="relative z-50 pt-20 pl-5 pr-5 m-auto max-w-[1750px] 
                        flex flex-row items-center">
          <div className="w-full pl-5">
              <p className="text-justify">
                During this time of peace the Chaotix discover a paper trail of blueprints to be built on an Island known as the Chiral Peninsula. These plans have Eggman’s name written all over them, requiring the power source of the Chaos Rings or Master Emerald. In his solidarity, Eggman was able to make a ton of breakthroughs using his research from Newtrogic Island. Now he is able to create robots that use positive ring energy as their power source, helping him stay under the radar of Sonic and G.U.N. 
              </p>
          </div>

          <div className="w-full">
            <img className="w-full pl-20" src={screenshot2} />
          </div>
        </div>
        <div className="relative z-50 pt-20 pl-5 pr-5 m-auto max-w-[1750px] 
                        flex flex-row items-center">
          <div className="w-full pl-5">
              <p className="text-justify">
                With this information in hand, Mighty calls upon his good friend Ray to warn Sonic the Hedgehog and Knuckles the Echidna about their lead on Eggman. In this rare time of freedom, the flickies are able to repay their debt to Sonic after the events on Flicky Island. They prevent Eggman from using the Chaos rings, breaking them down into a plethora of blue, red, and yellow rings scattered throughout dimensions. 
              </p>
          </div>

          <div className="w-full">
            <img className="w-full pl-20" src={screenshot3} />
          </div>
        </div>
        <div className="relative z-50 pt-20 pl-5 pr-5 m-auto max-w-[1750px] 
                        flex flex-row items-center">
          <div className="w-full pl-5">
              <p className="text-justify">
                Without hesitation, Sonic and friends travel to the Chiral Peninsula. As Ray drops them off one by one, he discovers an unconscious figure that looks similar to Sonic. Unbeknownst to Ray, he reawakens Shadow the Hedgehog. Without any recollection of his past, Ray decides to drop him off at the peninsula but as they approach, Shadow spots Eggman and orders Ray to chase him down. While it may just be intuition, Shadow feels the need to reclaim a sense of vengeance and recover his memories.
              </p>
          </div>

          <div className="w-full">
            <img className="w-full pl-20" src={screenshot5} />
          </div>
        </div>
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