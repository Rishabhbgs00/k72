import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Stairs from './Components/agence/common/Stairs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Stairs />
    <App />
  </StrictMode>,
)
