function Names({player1, setPlayer1, player2, setPlayer2}) {  
    return (
        <div className="names">
            <label>
                <p>Введите имя первого игрока</p>
                <input type="text" value={player1} onChange={event => setPlayer1(event.target.value)}/>
            </label>
            <label>
                <p>Введите имя второго игрока</p>
                <input type="text" value={player2} onChange={event => setPlayer2(event.target.value)}/>
            </label>
        </div>

    )
}

export default Names;