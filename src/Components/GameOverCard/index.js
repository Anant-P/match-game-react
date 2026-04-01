import './index.css'

const GameOverCard = ({score, onPlayAgain}) => {
  const onPlayAginClick = () => onPlayAgain()
  return (
    <div className="game-over-card">
      <img
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="game-over-score-para">YOUR SCORE</p>
      <p className="game-over-score-count">{score}</p>
      <button type="button" className="game-over-btn" onClick={onPlayAginClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOverCard
