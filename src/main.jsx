import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@picocss/pico/css/pico.min.css";
import "@picocss/pico/css/pico.colors.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hands on React</h1>
  </StrictMode>,
)
