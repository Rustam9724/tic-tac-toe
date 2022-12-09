import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Game from "./components/Game";
// import Winner from './components/Winner';
import Main from './components/Main';

function App() {
    // const [player, setPlayer] = useState('first');
    // const [process, setProcess] = useState([]);
    // const [trait, setTrait] = useState('default');
    const [player1, setPlayer1] = useState('Первый игрок');
    const [player2, setPlayer2] = useState('Второй игрок');

    return (
        <Router>
            <div className="wrapper">
                <h1 className="title">Сыграйте в крестики-нолики!</h1>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <Main 
                                player1={player1} 
                                setPlayer1={setPlayer1} 
                                player2={player2} 
                                setPlayer2={setPlayer2}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default App;