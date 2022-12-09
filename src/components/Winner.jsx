function Winner({process, setTrait, player1, player2}) {
    if (process.includes('11x') && process.includes('12x') && process.includes('13x')) {
        setTrait('default top-horizontal')
        return <p>{player1} выиграл!</p>
    } else if (process.includes('21x') && process.includes('22x') && process.includes('23x')){
        setTrait('default midle-horizontal')
        return <p>{player1} выиграл!</p>
    } else if (process.includes('31x') && process.includes('32x') && process.includes('33x')){
        setTrait('default bottom-horizontal')
        return <p>{player1} выиграл!</p>
    } else if (process.includes('11x') && process.includes('21x') && process.includes('31x')){
        setTrait('default left-vertical')
        return <p>{player1} выиграл!</p>
    } else if (process.includes('12x') && process.includes('22x') && process.includes('32x')){
        setTrait('default midle-vertical')
        return <p>{player1} выиграл!</p>
    } else if (process.includes('13x') && process.includes('23x') && process.includes('33x')){
        setTrait('default right-vertical')
        return <p>{player1} выиграл!</p>
    } else if (process.includes('11x') && process.includes('22x') && process.includes('33x')){
        setTrait('default main-diagonal')
        return <p>{player1} выиграл!</p>
    } else if (process.includes('13x') && process.includes('22x') && process.includes('31x')){
        setTrait('default side-diagonal')
        return <p>{player1} выиграл!</p>
    } else if (process.includes('11o') && process.includes('12o') && process.includes('13o')) {
        setTrait('default top-horizontal')
        return <p>{player2} выиграл!</p> 
    } else if (process.includes('21o') && process.includes('22o') && process.includes('23o')){
        setTrait('default midle-horizontal')
        return <p>{player2} выиграл!</p>
    } else if (process.includes('31o') && process.includes('32o') && process.includes('33o')){
        setTrait('default bottom-horizontal')
        return <p>{player2} выиграл!</p>
    } else if (process.includes('11o') && process.includes('21o') && process.includes('31o')){
        setTrait('default left-vertical')
        return <p>{player2} выиграл!</p>
    } else if (process.includes('12o') && process.includes('22o') && process.includes('32o')){
        setTrait('default midle-vertical')
        return <p>{player2} выиграл!</p>
    } else if (process.includes('13o') && process.includes('23o') && process.includes('33o')){
        setTrait('default right-vertical')
        return <p>{player2} выиграл!</p>
    } else if (process.includes('11o') && process.includes('22o') && process.includes('33o')){
        setTrait('default main-diagonal')
        return <p>{player2} выиграл!</p>
    } else if (process.includes('13o') && process.includes('22o') && process.includes('31o')){
        setTrait('default side-diagonal')
        return <p>{player2} выиграл!</p>
    } else if (process.length === 9) {
        return <p>Ничья!</p>
    }
}

export default Winner;