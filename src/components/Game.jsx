function Game({player, setPlayer, process, setProcess, trait}) {

    function clickHandler(event) {
        setPlayer(player === 'first' ? 'second' : 'first');
        if (player === 'first') {
            event.target.textContent = '×';
            setProcess([...process, `${event.target.id}x`])
        } else {
            event.target.textContent = '○';
            setProcess([...process, `${event.target.id}o`])
        }
    }
    return (
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
    )
}

export default Game;