import logements from '../../data/logements.json'
import { useState } from 'react'

function Card() {
  const [logementsList, setLogementsList] = useState(logements)
  console.log(logementsList)
  return (
    <div>
      {logementsList.map(({ id, title }) => (
        <div className="HomeCard" key={id}>
          {title}
        </div>
      ))}
    </div>
  )
}

export default Card
