import { Link } from 'react-router-dom';

function Over({gameOver, setGameOver, setTrait, setProcess, setPlayer}) {
    const clickHandler = () => {
        setGameOver(false);
        setTrait('default');
        setProcess([]);
        setPlayer('first');
    }

    if (gameOver) {
        return (
            <div className="over">
                    <Link to="/" className="end-button" onClick={clickHandler}>Сменить игроков</Link>
                <div className="end-button">
                    Сыграть заново
                </div>
            </div>
        )
    }
}

export default Over;