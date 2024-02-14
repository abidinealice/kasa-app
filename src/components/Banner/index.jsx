import PropTypes from 'prop-types'

function Banner({ picture, title }) {
  return (
    <div className="Banner">
      <img src={picture} alt="Bannière"></img>
      <span className="BannerTitle">{title}</span>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Banner
