import PropTypes from 'prop-types'

function Card({ title, picture }) {
  return (
    <div className="HomeCard">
      <img src={picture} alt="Couverture"></img>
      <div className="HomeCardText">{title}</div>
    </div>
  )
}

Card.propTypes = {
  picture: PropTypes.string.isRequired,
}

export default Card
