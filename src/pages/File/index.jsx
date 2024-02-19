import Collapse from '../../components/Collapse'
import SlideShow from '../../components/SlideShow'
import StarA from '../../assets/Star_active.png'
import StarI from '../../assets/Star_inactive.png'
import logements from '../../data/logements.json'
import { useParams } from 'react-router-dom'

function File() {
  const { pageId } = useParams()
  const range = [1, 2, 3, 4, 5]
  const rating = logements[pageId].rating
  const tags = logements[pageId].tags
  const equipments = logements[pageId].equipments
  const pictures = logements[pageId].pictures

  return (
    <div className="FileContainer">
      <SlideShow picture={pictures} total={pictures} />

      <div className="FileCont">
        <div className="FileCont1">
          <p className="FileTitle">{logements[pageId].title}</p>
          <p className="FileAddress">{logements[pageId].location}</p>
          <div className="FileTags">
            {tags.map((tags) => (
              <span key={tags.toString()}>{tags}</span>
            ))}
          </div>
        </div>

        <div className="FileCont2">
          <div className="FileOwner">
            <p className="FileOwnerName">{logements[pageId].host.name}</p>
            <img
              src={logements[pageId].host.picture}
              alt="Propriétaire"
              className="FileOwnerPic"
            />
          </div>
          <div className="FileRating">
            {range.map((rangeElem) =>
              parseInt(rating) >= rangeElem ? (
                <span key={rangeElem.toString()}>
                  <img src={StarA} alt="water-icon" />
                </span>
              ) : (
                <span key={rangeElem.toString()}>
                  <img src={StarI} alt="star-icon" />
                </span>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="FileCollapseContainer">
        <Collapse
          category="Description"
          description={logements[pageId].description}
        />
        <Collapse
          category="Equipement"
          description={equipments.map((equips) => (
            <span key={equips.toString()}>{equips}</span>
          ))}
        />
      </div>
    </div>
  )
}

export default File
