import './GameOver.css'

const GameOver = ({retry}) => {
    return (
        <div>
            <h1>Fim de jogo, Neném!!!</h1>
            <button onClick={retry}>Resetar Jogo</button>
        </div>
    )
}

export default GameOver