import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.tsx'
import "./style.css"
import { ParallaxProvider } from 'react-scroll-parallax'
import Credits from './pages/Credits.tsx'
import ScrollToTop from './Components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/'        element={<Home />} />
            <Route path='/credits' element={<Credits />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ParallaxProvider>
  </StrictMode>,
)
