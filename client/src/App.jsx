import './App.css';
import { useState } from "react";
import Axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [scores, setScores] = useState(0);

  
  const addPlayers = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      nickname: nickname,
      age: age,
      wins: wins,
      losses: losses,
      scores: scores,
    }).then(() => {
      console.log("success")
    });
  };

  return (
    <div className="App">
      <h1>TOGO FOOTBALL INFORMATION</h1>
        
      <div className="imformations">
        <label>Name:</label>
        <input type="text" onChange={(event) =>{setName(event.target.value);}} />

        <label> Nickname:</label>
        <input type="text" onChange={(event) =>{setNickname(event.target.value);}} />

        <label>Age:</label>
        <input type="number" onChange={(event) =>{setAge(event.target.value);}} />

        <label>Wins:</label>
        <input type="number" onChange={(event) =>{setWins(event.target.value);}} />

        <label>Losses:</label>
        <input type="number" onChange={(event) =>{setLosses(event.target.value);}} /> 

        <label>Scores:</label>
        <input type="number" onChange={(event) =>{setScores(event.target.value);}} /> 
         
        <button onClick={addPlayers} type='submit'>ADD PLAYER</button>

      </div>
    </div>
  );
}

export default App;
