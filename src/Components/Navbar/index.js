import './index.css'

const Navbar = ({min, score}) => {
  const formattedMin = min < 10 ? `0${min}` : min

  return (
    <nav>
      <ul className="navbar">
        <li className="nav-left">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </li>
        <li className="nav-right">
          <p>
            Score: <span className="nav-yellow-color">{score}</span>
          </p>
          <div className="timer-count-container">
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="nav-yellow-color">{formattedMin} sec</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
