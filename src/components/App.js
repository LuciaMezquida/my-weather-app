import '../styles/App.css';
import React, { useEffect, useState } from "react";
import apiCall from '../services/api'

function App() {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
      await apiCall(latitude, longitude).then(result => {
        setData(result)
        console.log(result)
      });
    }
    fetchData();
  }, [latitude,longitude])
  return (
    <h1 className="App">
      My Weather App
    </h1>
  );
}

export default App;
