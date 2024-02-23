import StarA from '../../assets/Star_active.png'
import StarI from '../../assets/Star_inactive.png'

function Rating({ ratings }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div>
      {range.map((rangeElem) =>
        parseInt(ratings) >= rangeElem ? (
          <span key={rangeElem.toString()}>
            <img src={StarA} alt="Icon étoile active" />
          </span>
        ) : (
          <span key={rangeElem.toString()}>
            <img src={StarI} alt="Icon étoile inactive" />
          </span>
        ),
      )}
    </div>
  )
}

export default Rating
