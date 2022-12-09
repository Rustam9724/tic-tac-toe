import { useState } from 'react';

import Main from "./components/Main";
import Winner from './components/Winner';
import Names from './components/Names';

function App() {
    const [player, setPlayer] = useState('first');
    const [process, setProcess] = useState([]);
    const [trait, setTrait] = useState('default');
    const [player1, setPlayer1] = useState('Первый игрок');
    const [player2, setPlayer2] = useState('Второй игрок');

    return (
        <div className="wrapper">
            <h1 className="title">Сыграйте в крестики-нолики!</h1>
            <Names player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2}/>
            <Main player={player} setPlayer={setPlayer} process={process} setProcess={setProcess} trait={trait}/>
            <Winner process={process} setTrait={setTrait}/>
        </div>
    )
}

export default App;