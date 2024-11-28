import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@picocss/pico/css/pico.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>React in Action</h1>
  </StrictMode>,
)
