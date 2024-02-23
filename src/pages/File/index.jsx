import Collapse from '../../components/Collapse'
import SlideShow from '../../components/SlideShow'
import logements from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Rating from '../../components/Rating'

function File() {
  const { pageId } = useParams()
  const idLogements = logements.find((idLogement) => idLogement.id === pageId)
  const idIndexLogement = logements.findIndex(
    (idIndexLogement) => idIndexLogement.id === pageId,
  )

  if (!idLogements) {
    return (
      <div>
        <Navigate to="/error" />
      </div>
    )
  } else {
    const rating = logements[idIndexLogement].rating
    const tags = logements[idIndexLogement].tags
    const equipments = logements[idIndexLogement].equipments
    const pictures = logements[idIndexLogement].pictures

    return (
      <div className="FileContainer">
        <SlideShow picture={pictures} total={pictures} />
        <div className="FileCont">
          <div className="FileCont1">
            <p className="FileTitle">{logements[idIndexLogement].title}</p>
            <p className="FileAddress">{logements[idIndexLogement].location}</p>
            <div className="FileTags">
              {tags.map((tags) => (
                <span key={tags.toString()}>{tags}</span>
              ))}
            </div>
          </div>

          <div className="FileCont2">
            <div className="FileOwner">
              <p className="FileOwnerName">
                {logements[idIndexLogement].host.name}
              </p>
              <img
                src={logements[idIndexLogement].host.picture}
                alt="Propriétaire"
                className="FileOwnerPic"
              />
            </div>
            <div className="FileRating">
              <Rating ratings={rating} />
            </div>
          </div>
        </div>
        <div className="FileCollapseContainer">
          <Collapse
            category="Description"
            description={logements[idIndexLogement].description}
          />
          <Collapse
            category="Equipements"
            description={equipments.map((equips) => (
              <span key={equips.toString()}>{equips}</span>
            ))}
          />
        </div>
      </div>
    )
  }
}

export default File
