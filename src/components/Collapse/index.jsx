import { useState } from 'react'
import aboutkasa from '../../data/aboutkasa.json'
import ArrowUp from '../../assets/ArrowUp.png'
import ArrowDown from '../../assets/ArrowDown.png'

function Collapse() {
  const [isOpen, setIsOpen] = useState(false)
  const openDescripton = () => {
    setIsOpen(true)
  }
  const closeDescripton = () => {
    setIsOpen(false)
  }
  return (
    <div className="CollapseContainer">
      {aboutkasa.map(({ id, category, description }) => (
        <div key={id}>
          <div className="CollapseCard">
            <div className="CollapseCardText">{category}</div>
            {isOpen ? (
              <button className="CollapseCardBtn" onClick={closeDescripton}>
                <img src={ArrowDown} alt="Fleche vers le bas" />
              </button>
            ) : (
              <button className="CollapseCardBtn" onClick={openDescripton}>
                <img src={ArrowUp} alt="Fleche vers le haut" />
              </button>
            )}
          </div>
          {isOpen && <div className="CollapseCardDpn">{description}</div>}
        </div>
      ))}
    </div>
  )
}

export default Collapse
