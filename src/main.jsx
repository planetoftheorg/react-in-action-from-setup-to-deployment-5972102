import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@picocss/pico/css/pico.min.css";
import "@picocss/pico/css/pico.colors.css";
const name = 'Stargazers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <img src="images/group.svg" alt="StarGazers Group" />
      <h1>Meet the <i style={{ color: "SteelBlue", fontSize: '3rem'}}>{name}</i></h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      <button onClick={() => alert('Hi there') }>Click Me</button>
    </div>
  </StrictMode>,
)
