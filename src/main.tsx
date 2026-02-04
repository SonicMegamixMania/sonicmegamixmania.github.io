import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import { ParallaxProvider } from 'react-scroll-parallax'
import ScrollToTop from './Components/ScrollToTop.tsx'
import "./style.css"

import Home from './pages/Home.tsx'
import Credits from './pages/Credits.tsx'
import Download from './pages/Download.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/'         element={<Home />} />
            <Route path='/download' element={<Download />} />
            <Route path='/credits'  element={<Credits />} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </ParallaxProvider>
  </StrictMode>,
)
