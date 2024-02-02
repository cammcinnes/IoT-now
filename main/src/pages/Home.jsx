import { useState } from 'react'
import "../style/Home.css"
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goto = () => {
    navigate("/create");
  }

  return (
    <>
      <h1>HomePage</h1>
      <button onClick={goto}> Create Project </button>
    </>
  );
}

export default Home;
