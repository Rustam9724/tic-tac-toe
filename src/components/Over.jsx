import { Link } from 'react-router-dom';

function Over({gameOver, setGameOver, setTrait, setProcess, setPlayer}) {

    let location = Location;
    const clickHandler1 = () => {
        setGameOver(false);
        setTrait('default');
        setProcess([]);
        setPlayer('first');
    }

    const clickHandler2 = () => {
        setGameOver(false);
        setTrait('default');
        setProcess([]);
        setPlayer('first');
    }

    if (gameOver) {
        return (
            <div className="over">
                    <Link to="/" className="end-button" onClick={clickHandler1}>Сменить игроков</Link>
                <div className="end-button" onClick={clickHandler2}>
                    Сыграть заново
                </div>
            </div>
        )
    }
}

export default Over;