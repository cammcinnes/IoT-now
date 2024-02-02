import { useState } from 'react';
import "../style/Home.css";
import Button from '../components/Button';

function CreateProject() {
  const [MCU, setMCU] = useState("");
  const [Sensor, setSensor] = useState("");
  const [LCD, setLCD] = useState("");
  return (
    <>
        <h1>Create Project</h1>
        <div className="input">
          <h2>Microcontrollers: </h2>
          <input type="text" value={MCU} onChange={e => setMCU(e.target.value)}/>
          <h3>{MCU}</h3>
          <h2>Sensors: </h2>
          <input type="text" value={Sensor} onChange={e => setSensor(e.target.value)}/>
          <h3>{Sensor}</h3>
          <h2>LCD: </h2>
          <input type="text" value={LCD} onChange={e => setLCD(e.target.value)}/>
          <h3>{LCD}</h3>
        </div>
        <button type= "submit"> Create </button>
    </>
  );
}

export default CreateProject;
