import { useState } from 'react';

import Main from "./components/Main";
import Winner from './components/Winner';

function App() {
    const [player, setPlayer] = useState('first');
    const [process, setProcess] = useState([]);
    const [trait, setTrait] = useState('default');

    return (
        <div className="wrapper">
            <h1 className="title">Сыграйте в крестики-нолики!</h1>
            <Main player={player} setPlayer={setPlayer} process={process} setProcess={setProcess} trait={trait}/>
            <Winner process={process} setTrait={setTrait}/>
        </div>
    )
}

export default App;