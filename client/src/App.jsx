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

  const [newScores, setNewScores] = useState(0);

  const [playerList, setPlayerList] = useState([]);

  const addPlayers = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      nickname: nickname,
      age: age,
      wins: wins,
      losses: losses,
      scores: scores,
    }).then(() => {
      setPlayerList([...playerList, {
      name: name,
      nickname: nickname,
      age: age,
      wins: wins,
      losses: losses,
      scores: scores,
      },
      ]);
    });
  };

  const getPlayers = () => {
    Axios.get('http://localhost:3001/Balls', {
      
    }).then((response) => {
      setPlayerList(response.data);
    });
  }
  
  const updatePlayerScores = (Id) => {
    Axios.put("http://localhost:3001/update", {scores: newScores, Id: Id}).then((response) => {
      setPlayerList(playerList.map((val) => {
        return val.Id = Id ? 
        {Id: val.Id, name: val.name, nickname: val.nickname, age: val.age, wins: val.wins, losses: val.losses, scores: val.newScores} : val ;
      })
      );
    });
  };
  
  const deletePlayers = 

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
      <div className="player">
        <button onClick={getPlayers} type='submit'>SHOW PLAYER</button>
        {playerList.map((val, key) => {
          return <div className="players"> 
                    <div>
                      <h2>Name: {val.name}</h2>
                      <h2>Nickname: {val.nickname}</h2>
                      <h2>Age: {val.age}</h2>
                      <h2>Wins: {val.wins}</h2>
                      <h2>Losses: {val.losses}</h2>
                      <h2>Scores: {val.scores}</h2>
                    </div>
                    <div> 
                      <input type="text" placeholder="2000" onChange={(event) =>{setNewScores(event.target.value);}}/> 
                      <button onClick={()=>{updatePlayerScores(val.Id)}} type='submit'>UPDATE PLAYER</button>
                      <button type='submit'>DELETE PLAYER</button>
                    </div>
           
                 </div>
        })}

      </div>
      </div>

    </div>
  );
}

export default App;
