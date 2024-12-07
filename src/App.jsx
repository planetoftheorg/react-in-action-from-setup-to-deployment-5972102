import { useEffect, useState } from "react";

import Nav from "./components/Nav"
import ListCast from "./components/ListCast"
import Modals from "./components/Modals";

import "@picocss/pico/css/pico.min.css";
import "@picocss/pico/css/pico.colors.css";

function App() {
  const name = 'Stargazers';
  let [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div className="container">
      <Nav />
      <img src="images/group.svg" alt="StarGazers Group" />
      <h1>Meet the <i style={{ color: "SteelBlue", fontSize: '3rem' }}>{name}</i></h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      {memberInfo &&
        <Modals
          member={memberInfo}
          handleClose={() => { setMemberInfo(null) }}
        />
      }
      <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
    </div>
  )
}

export default App;
