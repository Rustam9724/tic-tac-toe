import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Game from "./components/Game";
import Winner from './components/Winner';
import Main from './components/Main';

function App() {
    const [player, setPlayer] = useState('first');
    const [process, setProcess] = useState([]);
    const [trait, setTrait] = useState('default');
    const [player1, setPlayer1] = useState('Первый игрок');
    const [player2, setPlayer2] = useState('Второй игрок');
    const [gameOver, setGameOver] = useState(false);

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
                    <Route 
                        path="/game" 
                        element={
                            <Game 
                                player={player} 
                                setPlayer={setPlayer} 
                                process={process} 
                                setProcess={setProcess} 
                                trait={trait}
                                setTrait={setTrait}
                                player1={player1}
                                player2={player2}
                                gameOver={gameOver}
                                setGameOver={setGameOver}
                            />
                        }
                    />
                </Routes>
                {
                    gameOver && <Winner 
                                    process={process} 
                                    player1={player1} 
                                    player2={player2} 
                                    gameOver={gameOver} 
                                    setGameOver={setGameOver}
                                    setTrait={setTrait}
                                    setProcess={setProcess}
                                    setPlayer={setPlayer}
                                />
                }
                
            </div>
        </Router>
    )
}

export default App;