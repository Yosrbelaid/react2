import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px", color: "white", backgroundImage:'url("https://www.shutterstock.com/image-vector/sky-clouds-anime-background-cloudy-600nw-2430402851.jpg")' }}>The Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
