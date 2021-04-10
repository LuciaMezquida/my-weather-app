import '../styles/App.css';
import React, { useEffect, useState } from "react";


function App() {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
      console.log("Latitude is:", latitude)
      console.log("Longitude is:", longitude)
      console.log(navigator.geolocation);
    //   await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longigude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    //   .then(res => res.json())
    //   .then(result => {
    //     setData(result)
    //     console.log(result);
      // });
    // }
    // fetchData();
  }, [latitude,longitude])
  return (
    <h1 className="App">
      My Weather App
    </h1>
  );
}

export default App;
