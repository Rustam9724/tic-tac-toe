function Main({player1, setPlayer1, player2, setPlayer2}) {  
    return (
        <div>
            <div className="names">
                <label>
                    <p>Введите имя первого игрока</p>
                    <input 
                        type="text"
                        value={player1}
                        onChange={event => setPlayer1(event.target.value)} 
                        placeholder="Введите имя"
                    />
                </label>
                <label>
                    <p>Введите имя второго игрока</p>
                    <input 
                        type="text"
                        value={player2}
                        onChange={event => setPlayer2(event.target.value)}
                        placeholder="Введите имя"
                    />
                </label>
            </div>
            <button className="start-button">Начать!</button>
        </div>
    )
}

export default Main;