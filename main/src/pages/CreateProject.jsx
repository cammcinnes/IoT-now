import { useState } from 'react';
import "../style/Home.css";
import Button from '../components/Button';

function CreateProject() {
  const [MCU, setMCU] = useState("");
  const [Sensor, setSensor] = useState("");
  const [LCD, setLCD] = useState("");
  const [chatLog, setChatLog] = useState([]);

async function handleSubmit(e) {
  e.preventDefault();
  setChatLog([...chatLog, {user: "me", message: `Build me a IoT project using a ${MCU}, ${Sensor} and ${LCD}`}])
  setMCU("");
  setSensor("");
  setLCD("");
  // fetch response to the api
    const reponse = await fetch("http://localhost:3080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: chatLog.map((message) => message.message).join("")
    })
    });
    const data = await response.json();
    console.log(data.message);
}

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
        <button type= "submit" onClick={handleSubmit}> Create </button>
    </>
  );
}
export default CreateProject;
