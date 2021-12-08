import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Card from './components/Card';

function App() {

  const [nasaStuff, setNasaStuff] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=x4RcTxNlKs74lMFa33wwRMaZC51F0kANbzmLk3as')
      .then(resp => {
        setNasaStuff(resp.data);
      }).catch(err => {
        console.error(err);
      })
  }, [])
  return (
    <div className="App">
     {nasaStuff && <Card data={nasaStuff}/>}
    </div>
  );
}

export default App;
