import { useContext } from 'react'
import { ItemsContext } from '../../utils/context'

function Card() {
  const { logementsList } = useContext(ItemsContext)
  return (
    <div className="HomeContainer">
      {logementsList.map(({ id, title }) => (
        <div className="HomeCard" key={id}>
          <div className="HomeCardText">{title}</div>
        </div>
      ))}
    </div>
  )
}

export default Card
