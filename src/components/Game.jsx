function Game({player, setPlayer, process, setProcess, trait, setTrait, player1, player2, gameOver, setGameOver}) {

    function clickHandler(event) {
        if (!gameOver) {
            setPlayer(player === 'first' ? 'second' : 'first');
            if (player === 'first') {
                event.target.textContent = '×';
                setProcess([...process, `${event.target.id}x`])
            } else {
                event.target.textContent = '○';
                setProcess([...process, `${event.target.id}o`])
            }
        }
    }

    if (process.includes('11x') && process.includes('12x') && process.includes('13x')) {
        setGameOver(true);
        setTrait('default top-horizontal')
    } else if (process.includes('21x') && process.includes('22x') && process.includes('23x')){
        setGameOver(true);
        setTrait('default midle-horizontal')
    } else if (process.includes('31x') && process.includes('32x') && process.includes('33x')){
        setGameOver(true);
        setTrait('default bottom-horizontal')
    } else if (process.includes('11x') && process.includes('21x') && process.includes('31x')){
        setGameOver(true);
        setTrait('default left-vertical')
    } else if (process.includes('12x') && process.includes('22x') && process.includes('32x')){
        setGameOver(true);
        setTrait('default midle-vertical')
    } else if (process.includes('13x') && process.includes('23x') && process.includes('33x')){
        setGameOver(true);
        setTrait('default right-vertical')
    } else if (process.includes('11x') && process.includes('22x') && process.includes('33x')){
        setGameOver(true);
        setTrait('default main-diagonal')
    } else if (process.includes('13x') && process.includes('22x') && process.includes('31x')){
        setGameOver(true);
        setTrait('default side-diagonal')
    } else if (process.includes('11o') && process.includes('12o') && process.includes('13o')) {
        setGameOver(true);
        setTrait('default top-horizontal')
    } else if (process.includes('21o') && process.includes('22o') && process.includes('23o')){
        setGameOver(true);
        setTrait('default midle-horizontal')
    } else if (process.includes('31o') && process.includes('32o') && process.includes('33o')){
        setGameOver(true);
        setTrait('default bottom-horizontal')
    } else if (process.includes('11o') && process.includes('21o') && process.includes('31o')){
        setGameOver(true);
        setTrait('default left-vertical')
    } else if (process.includes('12o') && process.includes('22o') && process.includes('32o')){
        setGameOver(true);
        setTrait('default midle-vertical')
    } else if (process.includes('13o') && process.includes('23o') && process.includes('33o')){
        setGameOver(true);
        setTrait('default right-vertical')
    } else if (process.includes('11o') && process.includes('22o') && process.includes('33o')){
        setGameOver(true);
        setTrait('default main-diagonal')
    } else if (process.includes('13o') && process.includes('22o') && process.includes('31o')){
        setGameOver(true);
        setTrait('default side-diagonal')
    }


    return (
        <>
        {
            !gameOver ? <p className="player">{player === 'first' ? `${player1}, ваш ход` : `${player2}, ваш ход`}</p> 
            : <p className="player">Игра окончена!</p>
        }
        <div className="game">
            <div className={trait}></div>
            <table>
                <tbody>
                    <tr>
                        <td id="11" className="top-left" onClick={clickHandler}></td>
                        <td id="12" className="top-midle" onClick={clickHandler}></td>
                        <td id="13" className="top-right" onClick={clickHandler}></td>
                    </tr>
                    <tr>
                        <td id="21" className="midle-left" onClick={clickHandler}></td>
                        <td id="22" className="midle-midle" onClick={clickHandler}></td>
                        <td id="23" className="midle-right" onClick={clickHandler}></td>
                    </tr>
                    <tr>
                        <td id="31" className="bottom-left" onClick={clickHandler}></td>
                        <td id="32" className="bottom-midle" onClick={clickHandler}></td>
                        <td id="33" className="bottom-right" onClick={clickHandler}></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Game;