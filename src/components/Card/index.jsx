import PropTypes from 'prop-types'

function Card({ title, picture }) {
  return (
    <div className="Card">
      <img src={picture} alt="Couverture"></img>
      <div className="CardText">{title}</div>
    </div>
  )
}

Card.propTypes = {
  picture: PropTypes.string.isRequired,
}

export default Card
