import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState({})
  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=imperial&appid=895284fb2d2c50a520ea537456963d9c')           
     .then(response => response.json())
     .then(data => console.log(data));
  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
