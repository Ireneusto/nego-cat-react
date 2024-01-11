import Strike from "./Strike";
import Tile from "./Tile";

function Board( { tiles, onTileClick }) {
    return (
        <div className="board">
            <Tile onClick={() => onTileClick(0)} value={tiles[0]}/>
            <Tile onClick={() => onTileClick(1)} value={tiles[1]}/>
            <Tile onClick={() => onTileClick(2)} value={tiles[2]}/>
            <Tile onClick={() => onTileClick(3)} value={tiles[3]}/>
            <Tile onClick={() => onTileClick(4)} value={tiles[4]}/>
            <Tile onClick={() => onTileClick(5)} value={tiles[5]}/>
            <Tile onClick={() => onTileClick(6)} value={tiles[6]}/>
            <Tile onClick={() => onTileClick(7)} value={tiles[7]}/>
            <Tile onClick={() => onTileClick(8)} value={tiles[8]}/>
            <Tile onClick={() => onTileClick(9)} value={tiles[9]}/>
            <Tile onClick={() => onTileClick(10)} value={tiles[10]}/>
            <Tile onClick={() => onTileClick(11)} value={tiles[11]}/>
            <Tile onClick={() => onTileClick(12)} value={tiles[12]}/>
            <Tile onClick={() => onTileClick(13)} value={tiles[13]}/>
            <Tile onClick={() => onTileClick(14)} value={tiles[14]}/>
            <Tile onClick={() => onTileClick(15)} value={tiles[15]}/>
            <Tile onClick={() => onTileClick(16)} value={tiles[16]}/>
            <Tile onClick={() => onTileClick(17)} value={tiles[17]}/>
            <Tile onClick={() => onTileClick(18)} value={tiles[18]}/>
            <Tile onClick={() => onTileClick(19)} value={tiles[19]}/>
            <Tile onClick={() => onTileClick(20)} value={tiles[20]}/>
            <Tile onClick={() => onTileClick(21)} value={tiles[21]}/>
            <Tile onClick={() => onTileClick(22)} value={tiles[22]}/>
            <Tile onClick={() => onTileClick(23)} value={tiles[23]}/>
            <Tile onClick={() => onTileClick(24)} value={tiles[24]}/>
            <Tile onClick={() => onTileClick(25)} value={tiles[25]}/>
            <Tile onClick={() => onTileClick(26)} value={tiles[26]}/>
            <Tile onClick={() => onTileClick(27)} value={tiles[27]}/>
            <Tile onClick={() => onTileClick(28)} value={tiles[28]}/>
            <Tile onClick={() => onTileClick(29)} value={tiles[29]}/>
            <Tile onClick={() => onTileClick(30)} value={tiles[30]}/>
            <Tile onClick={() => onTileClick(31)} value={tiles[31]}/>
            <Tile onClick={() => onTileClick(32)} value={tiles[32]}/>
            <Tile onClick={() => onTileClick(33)} value={tiles[33]}/>
            <Tile onClick={() => onTileClick(34)} value={tiles[34]}/>
            <Tile onClick={() => onTileClick(35)} value={tiles[35]}/>
            <Tile onClick={() => onTileClick(36)} value={tiles[36]}/>
            <Tile onClick={() => onTileClick(37)} value={tiles[37]}/>
            <Tile onClick={() => onTileClick(38)} value={tiles[38]}/>
            <Tile onClick={() => onTileClick(39)} value={tiles[39]}/>
            <Tile onClick={() => onTileClick(40)} value={tiles[40]}/>
            <Tile onClick={() => onTileClick(41)} value={tiles[41]}/>
            <Tile onClick={() => onTileClick(42)} value={tiles[42]}/>
            <Tile onClick={() => onTileClick(43)} value={tiles[43]}/>
            <Tile onClick={() => onTileClick(44)} value={tiles[44]}/>
            <Tile onClick={() => onTileClick(45)} value={tiles[45]}/>
            <Tile onClick={() => onTileClick(46)} value={tiles[46]}/>
            <Tile onClick={() => onTileClick(47)} value={tiles[47]}/>
            <Tile onClick={() => onTileClick(48)} value={tiles[48]}/>
            <Tile onClick={() => onTileClick(49)} value={tiles[49]}/>
            <Tile onClick={() => onTileClick(50)} value={tiles[50]}/>
            <Tile onClick={() => onTileClick(51)} value={tiles[51]}/>
            <Tile onClick={() => onTileClick(52)} value={tiles[52]}/>
            <Tile onClick={() => onTileClick(53)} value={tiles[53]}/>
            <Tile onClick={() => onTileClick(54)} value={tiles[54]}/>
            <Tile onClick={() => onTileClick(55)} value={tiles[55]}/>
            <Tile onClick={() => onTileClick(56)} value={tiles[56]}/>
            <Tile onClick={() => onTileClick(57)} value={tiles[57]}/>
            <Tile onClick={() => onTileClick(58)} value={tiles[58]}/>
            <Tile onClick={() => onTileClick(59)} value={tiles[59]}/>
            <Tile onClick={() => onTileClick(60)} value={tiles[60]}/>
            <Tile onClick={() => onTileClick(61)} value={tiles[61]}/>
            <Tile onClick={() => onTileClick(62)} value={tiles[62]}/>
            <Tile onClick={() => onTileClick(63)} value={tiles[63]}/>
            <Strike />
        </div>
    );
}

export default Board;