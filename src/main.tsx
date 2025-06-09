import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import Conteiner from './Container.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Conteiner nome='Header' />
    <Conteiner nome='Body'  />
  </StrictMode>,
)
