import './index.css'

const TabItem = props => {
  const {tabItem, isActive, onTabChange} = props
  const {tabId, displayText} = tabItem
  const onChangeId = () => {
    onTabChange(tabId)
  }

  const active = isActive ? 'list-item-border' : ''

  return (
    <li>
      <button type="button" className={active} onClick={onChangeId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
