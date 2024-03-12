import { Link } from 'react-router-dom'
import LogoDesktop from '../../assets/Logo_desktop.png'

function Header() {
  return (
    <div className="HeaderContainer">
      <Link to="/">
        <img src={LogoDesktop} alt="Logo Kasa" />
      </Link>
      <div className="NavLinks">
        <div className="NavLinks_home">
          <Link to="/">Accueil</Link>
        </div>
        <div className="NavLinks_about">
          <Link to="/about">A Propos</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
