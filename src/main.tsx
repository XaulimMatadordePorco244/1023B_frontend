import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Footer from './footer.tsx'
import Header from './header.tsx'
import Body from './body.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Footer/>
    <Body/>
    <Header/>
  </StrictMode>,
)
