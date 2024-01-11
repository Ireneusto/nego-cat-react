import { useState } from "react";
import Board from "./Board";

const Player_WHITE = "W";
const Player_BLACK = "B";

function NegoGame() {
    const[tiles, setTiles] = useState(Array(64).fill(null))
    const[playerTurn, setPlayerTurn] = useState(Player_WHITE);

    const handleTileClick = (index)=>{
        console.log(index);
    };

    return (
        <div>
            <h1>Nego Cat Game</h1>
            <Board tiles={tiles} onTileClick={handleTileClick} />
        </div>
    );
}

export default NegoGame;