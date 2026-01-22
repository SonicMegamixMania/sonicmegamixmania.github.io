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
                    Bánhegyi Balázs A.K.A “Balibali”
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
                  <span className="text-3xl block mb-2">Joey A.K.A. “Alpher”</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lead Level Designer</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Mr. Cyber</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lead Artist</li>
                    <li>Level Designer</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">ruby</span>
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
                  <span className="text-3xl block mb-2">AChickMcNuggie</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Artist</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Benjistring</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                    <li>Level Designer</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">DaanDemmers</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Glace Sue</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Jacket</span>
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
                  <span className="text-3xl block mb-2">Leilani Wilson</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Luan Maziero</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                    <li>Portuguese Translation</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">MnMi</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Artist</li>
                    <li>German Translation</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Mr. LevRocks</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Artist</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">ScrewStache</span>
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
                  <span className="text-3xl block mb-2">Snowball The Puppy</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">SpeedVGM</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Tales</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Promotional Artist</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">Mibo</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Musician</li>
                  </ul>
                </li>

                <li>
                  <span className="text-3xl block mb-2">ZeekieJoe</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Artist</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Additional Contributors Section */}
            <section>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4 border-b pb-2">Additional Contributors</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Axanery - Quality Assurance</li>
                <li>AxelFrog - Dutch Translation</li>
                <li>Bagel - Quality Assurance</li>
                <li>bit_uint32 - Spanish Translation, Quality Assurance</li>
                <li>Braven - Quality Assurance</li>
                <li>Bob - Quality Assurance</li>
                <li>Burrotis - Quality Assurance</li>
                <li>ChaseCat - Initial Music work</li>
                <li>Gambito - Japanese Translation, Quality Assurance</li>
                <li>GHNeko - Quality Assurance</li>
                <li>Jon Koneko - Classic Mode Assistance</li>
                <li>Kast - French Translation</li>
                <li>KGL - Help with an Ending Visual</li>
                <li>KiaraGale - Sonic Mania Addendum improvements ported over</li>
                <li>LouPlayer - Minor Sprite Art Assistance</li>
                <li>Mantis - Quality Assurance</li>
                <li>MiaCDi - Quality Assurance</li>
                <li>NMark - Spanish Translation</li>
                <li>Orbyy - Initial Project Founder</li>
                <li>Seb Kaiba - Quality Assurance</li>
                <li>SuperSonic16 - Sonic Mania Rich Presence Source Code</li>
                <li>PVic - Portuguese Translation, Quality Assurance</li>
                <li>RetroForever - Minor Sprite Art Assistance</li>
                <li>Soli - Minor Sprite Art Assistance</li>
                <li>TheBlurCafe - Italian Translation</li>
                <li>TheVagabond - 3D Shadow Model</li>
                <li>Tokonemu - Quality Assurance</li>
                <li>Xavier Kenzan - Quality Assurance</li>
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