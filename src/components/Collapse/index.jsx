import { useState } from 'react'
import PropTypes from 'prop-types'
import Arrow from '../../assets/ArrowDown.png'

function Collapse({ category, description }) {
  const [isOpen, setIsOpen] = useState(false)
  const openDescripton = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="CollapseContainer">
      <div className="CollapseCard">
        <div className="CollapseCardText">{category}</div>
        <button className="CollapseCardBtn" onClick={openDescripton}>
          {isOpen ? (
            <img src={Arrow} alt="Fleche vers le haut" className="arrow-up" />
          ) : (
            <img src={Arrow} alt="Fleche vers le bas" className="arrow-down" />
          )}
        </button>
      </div>
      {isOpen && <div className="CollapseCardDpn">{description}</div>}
    </div>
  )
}

Collapse.propTypes = {
  category: PropTypes.string.isRequired,
}

export default Collapse
