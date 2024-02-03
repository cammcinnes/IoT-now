import { useEffect, useState } from 'react';
import "../style/Home.css";
// import { useNavigate } from 'react-router-dom';

// show values on page if working on code
const debug = true;

function CreateProject() {
  const [MCU, setMCU] = useState("");
  const [Sensor, setSensor] = useState("");
  const [LCD, setLCD] = useState("");
  const [chatLog, setChatLog] = useState("");
  const [Project, setProject] = useState("");
  // const navigate = useNavigate();

  // update the state as you go
  useEffect(()=> {
    setChatLog(`Build me an IoT project using a ${MCU}, ${Sensor}, and a ${LCD}`);
  },[MCU, Sensor, LCD]);

  async function handleSubmit(e) {
    e.preventDefault();
    // fetch response to the api
      const response = await fetch("http://localhost:3080", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: chatLog
      })
      });
      // clear states
      setMCU("");
      setSensor("");
      setLCD("");

      const data = await response.json();
      setProject(data.message);
  }

  return (
    <>
        <h1>Create Project</h1>
        <div className="input">
          <form onSubmit={handleSubmit}>
            <h2>Microcontrollers: </h2>
            <input type="text" value={MCU} onChange={e => setMCU(e.target.value)}/>
            {debug && <p>{MCU}</p>}
            <h2>Sensors: </h2>
            <input type="text" value={Sensor} onChange={e => setSensor(e.target.value)}/>
            <h2>LCD: </h2>
            <input type="text" value={LCD} onChange={e => setLCD(e.target.value)}/>
            <br></br>
            <br></br>
            <button type= "submit"> Create </button>
            </form>
            {debug && <p>Message to gpt3.5: {chatLog}</p>}
            {debug && <p>{Project}</p>}
        </div>
    </>
  );
}
export default CreateProject;
