import { useEffect, useState } from "react";

import Nav from "./components/Nav"
import ListCast from "./components/ListCast"
import Modals from "./components/Modals";

import "@picocss/pico/css/pico.min.css";
import "@picocss/pico/css/pico.colors.css";
import "./App.css";

function App() {
  const name = 'Stargazers';
  let [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  // Fetches cast data from JSON file with error handling and type safety
  async function fetchCast() {
    try {
      // Make API request with fetch
      const response = await fetch('cast.json');

      // Check if request was successful (status 200-299)
      if (!response.ok) {
        throw new Error('Failed to fetch cast data');
      }

      // Parse JSON response and update state
      const data = await response.json();
      setCast(data);
    } catch (error) {
      // Log error and set empty cast array as fallback
      // This prevents the app from crashing if fetch fails
      console.error('Error fetching cast:', error);
      setCast([]);
    }
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div className="container">
      <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
      <img src="images/group.svg" alt="StarGazers Group" />
      <hgroup>
        <h1>Meet the {name}</h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      </hgroup>
      {memberInfo &&
        <Modals
          member={memberInfo}
          handleClose={() => { setMemberInfo(null) }}
          handleChange={(info) => { setMemberInfo(cast[info]) }}
        />
      }
      <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
    </div>
  )
}

export default App;
