export default function apiCall (latitude, longitude) {
  return fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  .then(response => response.json())
} 
