//import logo from './logo.svg';
//import './App.css';
//import '/Users/Ihisan/KYH/IoT20/Sensors/app.py'
//import '/Users/Ihisan/KYH/IoT20/Sensors/app.css'
import './sensor_data.json';
import './sensors.json';
import './dynamodb.py'
import React, { useState, useEffect } from 'react';

 function App() {
  const [text, setText] = useState(true);
  
  useEffect(async() =>  {     //Varje gång showText anropas/ändras, då körs funktionen igång. Den kommer alltid köras minst en gång
    setText ( await fetch ('http://localhost:8080'))
    
  }, 
  [] ) //
  if (!text) return <h2>Loading data...</h2>
  console.log(text)
  return (
    <div >
    <h2>Infrared sensor</h2>
    <table>
        <tr>
            <th>Sensor name</th>
            <th>Timestamp</th>
            <th>Distance</th>
            <th>Temperature</th>
        </tr>
        { text.main_door_1.map(sensor =>
            <tr>
                <td>{ sensor['sensorname']}</td>
                <td>{ sensor['info']['timestamp']}</td>
                <td>{ sensor['info']['distance'] }</td>
                <td>{ sensor['info']['temp'] }</td>
            </tr>
        )}
    </table>
        <h2>Temp control</h2>
    <table>
        <tr>
            <th>Sensor name</th>
            <th>Timestamp</th>
            <th>Distance</th>
            <th>Temperature</th>
        </tr>
        { text.main_door_2.map(sensor =>
            <tr>
                <td>{ sensor['sensorname'] }</td>
                <td>{ sensor['info']['timestamp'] }</td>
                <td>{ sensor['info']['distance'] }</td>
                <td>{ sensor['info']['temp'] }</td>
            </tr>
        )}
    </table>
    </div>
  );
}
export default App;


/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */