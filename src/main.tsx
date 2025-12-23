import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.tsx'
import "./style.css"
import { ParallaxProvider } from 'react-scroll-parallax'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  </StrictMode>,
)
