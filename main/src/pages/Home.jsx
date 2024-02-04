import { useNavigate } from 'react-router-dom';
import "../style/Home.css";
import "../style/Main.css";

function Home() {
  const navigate = useNavigate();

  const goto = () => {
    navigate("/create");
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={goto}> Create Project </button>
    </>
  );
}

export default Home;
