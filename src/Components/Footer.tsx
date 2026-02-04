import { Link } from 'react-router'
import ScrollingBar from './ScrollingBar'

const Footer = () => {
  return (
    <footer className='relative bg-[#14142e] p-5'>
      <ScrollingBar />
      <div className='mt-10 max-w-[1200px] text-center m-auto'>
        <p>
          Sonic Megamix Mania is a non-profit fan game. 
          <br/><br/>
          <span className='text-xl'>
          Sonic the Hedgehog is a registered trademark of SEGA Holdings Co., Ltd. This project is not affiliated with, endorsed by, or licensed by SEGA. All Sonic characters, assets, and related intellectual property belong to SEGA.
          </span>
        </p>

        <p className='mt-10 text-4xl'><Link className='underline' to="/Credits">Full Credits</Link></p>
        <p className='m-5'>
          <a className='underline' target='_blank' href='https://twitter.com/MegamixMania'>Twitter</a>
          <span className='ml-2 mr-2'>&bull;</span>
          <a className='underline' target='_blank' href='https://bsky.app/profile/megamixmania.bsky.social'>Bluesky</a>
          <span className='ml-2 mr-2'>&bull;</span>
          <a className='underline' target='_blank' href='https://www.youtube.com/@sonicmegamixmania'>YouTube</a>
          <span className='ml-2 mr-2'>&bull;</span>
          <a className='underline' target='_blank' href='https://discord.com/servers/sonic-megamix-mania-community-server-493217624763924481'>Discord</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer