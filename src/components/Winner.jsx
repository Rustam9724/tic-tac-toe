import Over from './Over';

function Winner({process, player1, player2, gameOver, setGameOver, setTrait, setProcess, setPlayer}) {
    let result;
    if (process.includes('11x') && process.includes('12x') && process.includes('13x')) {
        result = <p className="winner">{player1} выиграл!</p>
    } else if (process.includes('21x') && process.includes('22x') && process.includes('23x')){
        result = <p className="winner">{player1} выиграл!</p>
    } else if (process.includes('31x') && process.includes('32x') && process.includes('33x')){
        result = <p className="winner">{player1} выиграл!</p>
    } else if (process.includes('11x') && process.includes('21x') && process.includes('31x')){
        result = <p className="winner">{player1} выиграл!</p>
    } else if (process.includes('12x') && process.includes('22x') && process.includes('32x')){
        result = <p className="winner">{player1} выиграл!</p>
    } else if (process.includes('13x') && process.includes('23x') && process.includes('33x')){
        result = <p className="winner">{player1} выиграл!</p>
    } else if (process.includes('11x') && process.includes('22x') && process.includes('33x')){
        result = <p className="winner">{player1} выиграл!</p>
    } else if (process.includes('13x') && process.includes('22x') && process.includes('31x')){
        result = <p className="winner">{player1} выиграл!</p>
    } else if (process.includes('11o') && process.includes('12o') && process.includes('13o')) {
        result = <p className="winner">{player2} выиграл!</p> 
    } else if (process.includes('21o') && process.includes('22o') && process.includes('23o')){
        result = <p className="winner">{player2} выиграл!</p>
    } else if (process.includes('31o') && process.includes('32o') && process.includes('33o')){
        result = <p className="winner">{player2} выиграл!</p>
    } else if (process.includes('11o') && process.includes('21o') && process.includes('31o')){
        result = <p className="winner">{player2} выиграл!</p>
    } else if (process.includes('12o') && process.includes('22o') && process.includes('32o')){
        result = <p className="winner">{player2} выиграл!</p>
    } else if (process.includes('13o') && process.includes('23o') && process.includes('33o')){
        result = <p className="winner">{player2} выиграл!</p>
    } else if (process.includes('11o') && process.includes('22o') && process.includes('33o')){
        result = <p>{player2} выиграл!</p>
    } else if (process.includes('13o') && process.includes('22o') && process.includes('31o')){
        result = <p className="winner">{player2} выиграл!</p>
    } else if (process.length === 9) {
        result = <p className="winner">Ничья!</p>
    }

    return (
        <div>
            {result}
            <Over 
                gameOver={gameOver} 
                setGameOver={setGameOver} 
                setTrait={setTrait} 
                setProcess={setProcess} 
                setPlayer={setPlayer}
            />
        </div>
    )
}

export default Winner;