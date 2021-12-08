import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {

  const [nasaStuff, setNasaStuff] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=x4RcTxNlKs74lMFa33wwRMaZC51F0kANbzmLk3as')
      .then(resp => {
        console.log(resp);
      }).catch(err => {
        console.error(err);
      })
  })
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
