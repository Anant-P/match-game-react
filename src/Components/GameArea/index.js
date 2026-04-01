import './index.css'
import {Component} from 'react'
import Navbar from '../Navbar'
import TabItem from '../TabItem'
import CardItem from '../CardItem'
import GameOverCard from '../GameOverCard'

class GameArea extends Component {
  intervalId = null

  constructor(props) {
    super(props)
    const {imagesList, tabsList} = this.props

    this.state = {
      tabsList,
      imagesList,
      displayImgUrl: imagesList[0].imageUrl,
      displayImgId: imagesList[0].id,
      selectedTab: tabsList[0].tabId,
      min: 60,
      gameNotOver: true,
      score: 0,
    }
  }

  onTab = activeTabId => {
    this.setState({selectedTab: activeTabId})
  }

  onClickSuffleList = id => {
    const {imagesList} = this.state

    const randomNum = Math.floor(Math.random() * imagesList.length)

    this.setState({
      imagesList: imagesList.sort(() => Math.random() - 0.5),
    })

    // if(id === displayImgId){
    //   this.setState(prevState=>(
    //     {score: prevState.score + 1}
    //   ))
    // }

    this.setState(prevState => {
      if (id === prevState.displayImgId) {
        return {
          score: prevState.score + 1,
          displayImgUrl: imagesList[randomNum].imageUrl,
          displayImgId: imagesList[randomNum].id,
        }
      }
      return (
        clearInterval(this.intervalId),
        {gameNotOver: !prevState.gameNotOver, min: 0}
      )
    })
  }

  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.min === 0) {
          return (
            clearInterval(this.intervalId),
            {
              min: 0,
              gameNotOver: !prevState.gameNotOver,
            }
          )
        }

        return {min: prevState.min - 1}
      })
    }, 1000)
  }

  onPlayAgain = () => {
    this.componentDidMount()
    this.setState(prevState => ({
      gameNotOver: !prevState.gameNotOver,
      score: 0,
      min: 60,
    }))
  }

  render() {
    const {
      displayImgUrl,
      selectedTab,
      tabsList,
      imagesList,
      min,
      score,
      gameNotOver,
    } = this.state
    const filterbytabList = imagesList.filter(
      eachItem => eachItem.category === selectedTab,
    )

    return (
      <>
        <Navbar min={min} score={score} />
        <div className="main-container">
          {gameNotOver ? (
            <>
              <div className="img-container">
                <img className="display-img" alt="match" src={displayImgUrl} />
              </div>
              <ul className="tab-list">
                {tabsList.map(tabItem => (
                  <TabItem
                    key={tabItem.tabId}
                    tabItem={tabItem}
                    onTabChange={this.onTab}
                    isActive={tabItem.tabId === selectedTab}
                  />
                ))}
              </ul>
              <ul className="card-list">
                {filterbytabList.map(imageItem => (
                  <CardItem
                    key={imageItem.thumbnailUrl}
                    imageItem={imageItem}
                    suffleList={this.onClickSuffleList}
                  />
                ))}
              </ul>
            </>
          ) : (
            <GameOverCard score={score} onPlayAgain={this.onPlayAgain} />
          )}
        </div>
      </>
    )
  }
}

export default GameArea
