import React from "react";
import Player from "./player";
import players from "./Players";

const PlayersList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('https://thumbs.dreamstime.com/b/empty-soccer-stadium-vibrant-green-field-awaiting-arrival-fans-players-generative-ai-318565832.jpg')",
        backgroundSize: "cover",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;

