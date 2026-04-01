import './index.css'

const CardItem = props => {
  const {imageItem, suffleList} = props
  const {id, thumbnailUrl} = imageItem

  const onCardClick = () => {
    suffleList(id)
  }

  return (
    <li className="card-item-contaniner" onClick={onCardClick}>
      <button type="button">
        <img className="card-item-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default CardItem
