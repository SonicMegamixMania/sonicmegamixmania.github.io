import { Link } from 'react-router'
import ScrollingBar from '../Components/ScrollingBar'

const Credits = () => {
  return (
    <div className="m-auto text-white font-outfit text-2xl">
      <div className="relative min-h-screen bg-[#484868]">
        <ScrollingBar /> 
        <div className="w-full mt-10 lg:mt-0 z-50 pl-3 lg:pl-10 pr-3 lg:pr-10 pt-30 pb-30 m-auto max-w-[900px]">

          <div className="p-8 space-y-12">
            {/* Project Leads Section */}
            <section>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b pb-2">Project Leads</h2>
              <ul className="space-y-8">
                <li>
                  <a href="https://troopsushi.com" className="text-3xl underline block mb-2">
                    Anthony Botsford A.K.A. “Troopsushi”
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lead Artist</li>
                    <li>Level Designer</li>
                  </ul>
                </li>

                <li>
                  <a href="https://linktr.ee/balibali418" className="text-3xl underline block mb-2">
                    Bánhegyi Balázs A.K.A. “Balibali”
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Project Organizer</li>
                    <li>Social Media Manager</li>
                    <li>Lead Level Designer</li>
                    <li>Classic Mode & Challenge Mode Lead</li>
                    <li>Translation Lead</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.codenamegamma.com" className="text-3xl underline block mb-2">
                    CodenameGamma
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lead Programmer</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.dominik-justwiz.co.uk/" className="text-3xl underline block mb-2">
                    Dominik Heiler A.K.A. “JustWiz”
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lead Artist</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.youtube.com/@plasticwizard9871" className="text-3xl underline block mb-2">
                    Jake Clark A.K.A. “Plastic Wizard”
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Social Media Manager</li>
                    <li>Lead Level Designer</li>
                    <li>Lead Writer</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.youtube.com/@FsAlpha24" className="text-3xl underline block mb-2">
                    Joey Jordan A.K.A. “Alpher”
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lead Level Designer</li>
                  </ul>
                </li>

                <li>
                  <a href="https://twitter.com/Cyber_1204" className="text-3xl underline block mb-2">
                    Mr. Cyber
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lead Artist</li>
                    <li>Level Designer</li>
                  </ul>
                </li>

                <li>
                  <a href="https://bsky.app/profile/phantomruby.bsky.social" className="text-3xl underline block mb-2">
                    ruby
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Sound Manager</li>
                    <li>Musician</li>
                    <li>Dutch Translation</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Site Developer Section */}
            <section>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b pb-2">Site Developer</h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://linktr.ee/gbcasanova" className="text-3xl underline block mb-2">
                    Gabriel Casanova
                  </a>
                </li>
              </ul>
            </section>

            {/* Project Members Section */}
            <section>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b pb-2">Project Members</h2>
              <ul className="space-y-8">
                <li>
                  <a href="https://twitter.com/McNuggieee" className="text-3xl underline block mb-2">
                    AChickMcNuggie
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Artist</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.youtube.com/c/benjistring" className="text-3xl underline block mb-2">
                    Benjistring
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                    <li>Level Designer</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.youtube.com/@DaanDemmers" className="text-3xl underline block mb-2">
                    DaanDemmers
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.youtube.com/@glacesue" className="text-3xl underline block mb-2">
                    Glace Sue
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <a href="https://linktr.ee/jacket227" className="text-3xl underline block mb-2">
                    Jacket
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Promotional Artist</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Kanna</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Artist</li>
                  </ul>
                </li>

                <li>
                  <a href="https://soundcloud.com/leilani-r-wilson" className="text-3xl underline block mb-2">
                    Leilani Wilson
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.youtube.com/channel/UCpVc7zvoCFsDO9N3qjkrZ6g" className="text-3xl underline block mb-2">
                    Luan Maziero
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                    <li>Portuguese Translation</li>
                  </ul>
                </li>

                <li>
                  <a href="https://linktr.ee/MiBOpux" className="text-3xl underline block mb-2">
                    Mibo
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <a href="https://twitter.com/MnMi_Dev" className="text-3xl underline block mb-2">
                    MnMi
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Artist</li>
                    <li>German Translation</li>
                  </ul>
                </li>

                <li>
                  <a href="https://twitter.com/MrLevRocks" className="text-3xl underline block mb-2">
                    Mr. LevRocks
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Artist</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.youtube.com/c/ScrewStache" className="text-3xl underline block mb-2">
                    ScrewStache
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Sin Nombre</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Artist</li>
                  </ul>
                </li>

                <li>
                  <a href="https://www.youtube.com/@SnowballThePuppy" className="text-3xl underline block mb-2">
                    Snowball The Puppy
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <a href="https://speedvgm.carrd.co/" className="text-3xl underline block mb-2">
                    SpeedVGM
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <a href="https://bsky.app/profile/tales499.bsky.social" className="text-3xl underline block mb-2">
                    Tales449
                  </a>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Promotional Artist</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Additional Contributors Section */}
            <section>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b pb-2">Additional Contributors</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://youtube.com/c/axanery" className="underline">Axanery</a> - Quality Assurance</li>
                <li>AxelFrog - Dutch Translation</li>
                <li>Bagel - Quality Assurance</li>
                <li><a href="https://uint32bit.github.io/" className="underline">bit_uint32</a> - Spanish Translation, Quality Assurance</li>
                <li>Bob - Quality Assurance</li>
                <li><a href="https://bsky.app/profile/beforethenight.bsky.social" className="underline">Braven</a> - Quality Assurance</li>
                <li><a href="https://son1c2001.carrd.co/" className="underline">Burrotis</a> - Quality Assurance</li>
                <li>ChaseCat - Initial Music work</li>
                <li><a href="https://twitter.com/Gambito32x" className="underline">Gambito</a> - Japanese Translation, Quality Assurance</li>
                <li>Jon Koneko - Classic Mode Assistance</li>
                <li><a href="https://twitter.com/TheSoniKast" className="underline">Kast</a> - French Translation</li>
                <li>KGL - Help with an Ending Visual</li>
                <li><a href="https://twitter.com/KiaraGale8677" className="underline">KiaraGale</a> - Sonic Mania Addendum improvements ported</li>
                <li><a href="https://twitter.com/louplayer54" className="underline">LouPlayer</a> - Minor Sprite Art Assistance</li>
                <li>Mantis - Quality Assurance</li>
                <li><a href="https://twitter.com/fortnitegaybutt" className="underline">MiaCDi</a> - Quality Assurance</li>
                <li><a href="https://twitter.com/Markk_lastname" className="underline">NMark</a> - Spanish Translation</li>
                <li>Orbyy - Initial Project Founder</li>
                <li><a href="https://pedrovictorvg.notion.site/Pedro-Gon-alves-PVic-0336b91fd2b04903b2be65e8b339660f" className="underline">PVic</a> - Portuguese Translation, Quality Assurance</li>
                <li>RetroForever - Minor Sprite Art Assistance</li>
                <li>Seb Kaiba - Quality Assurance</li>
                <li>Soli - Minor Sprite Art Assistance</li>
                <li><a href="https://bsky.app/profile/ss16.moe" className="underline">SuperSonic16</a> - Sonic Mania Rich Presence Source Code</li>
                <li>TheBlurCafe - Italian Translation</li>
                <li>TheVagabond - 3D Shadow Model</li>
                <li>Tokonemu - Quality Assurance</li>
                <li>Xavier Kenzan - Quality Assurance</li>
                <li>ZeekieJoe - Minor Sprite Art Assistance</li>
              </ul>
            </section>

            {/* OG team */}
            <section>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b pb-2">The Originators</h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.headcannon.com/TeamMegamix/index.php?p=team" className="text-3xl underline block mb-2">
                    Original Megamix Team
                  </a>
                </li>
              </ul>
            </section>
            
            <div className='text-center'>
              <Link className="text-4xl underline" to="/">R E T U R N</Link>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Credits