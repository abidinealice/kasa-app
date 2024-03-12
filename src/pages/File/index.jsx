import Collapse from '../../components/Collapse'
import SlideShow from '../../components/SlideShow'
import logements from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Rating from '../../components/Rating'

function File() {
  const { pageId } = useParams()
  const logement = logements.find((logement) => logement.id === pageId)

  if (!logement) {
    return (
      <div>
        <Navigate to="/error" />
      </div>
    )
  } else {
    const tags = logement.tags
    return (
      <div className="FileContainer">
        <SlideShow picture={logement.pictures} total={logement.pictures} />
        <div className="FileCont">
          <div className="FileCont1">
            <p className="FileTitle">{logement.title}</p>
            <p className="FileAddress">{logement.location}</p>
            <div className="FileTags">
              {tags.map((tags) => (
                <span key={tags.toString()}>{tags}</span>
              ))}
            </div>
          </div>

          <div className="FileCont2">
            <div className="FileOwner">
              <p className="FileOwnerName">{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt="Propriétaire"
                className="FileOwnerPic"
              />
            </div>
            <div className="FileRating">
              <Rating ratings={logement.rating} />
            </div>
          </div>
        </div>
        <div className="FileCollapseContainer">
          <Collapse category="Description" description={logement.description} />
          <Collapse
            category="Equipements"
            description={logement.equipments.map((equips) => (
              <span key={equips.toString()}>{equips}</span>
            ))}
          />
        </div>
      </div>
    )
  }
}

export default File
