import { useEffect, useState } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';

import "@picocss/pico/css/pico.min.css";
import "@picocss/pico/css/pico.colors.css";
import "./App.css";

function App() {
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <>
      <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
      <div className="container">
        <header>
          <img src="images/group.svg" alt="StarGazers Group" />
        </header>
        <hgroup style={{ margin: '50px 0' }}>
          <h1>Meet the Stargazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        </hgroup>
        <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
        {memberInfo && <Modals member={memberInfo} handleChange={(info) => { setMemberInfo(cast[info]) }} handleClose={() => { setMemberInfo(null) }} />}
      </div>
    </>
  )
}

export default App
