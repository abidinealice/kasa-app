import { useContext } from 'react'
import { ItemsContext } from '../../utils/context'

function Card() {
  const { logementsList } = useContext(ItemsContext)
  console.log(logementsList)
  return (
    <div>
      {logementsList.map(({ id, title }) => (
        <div className="HomeCard" key={id}>
          <div className="HomeCardText">{title}</div>
        </div>
      ))}
    </div>
  )
}

export default Card
