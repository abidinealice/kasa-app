import { Link } from 'react-router-dom'
import LogoDesktopFooter from '../../assets/Logo_footer_desktop.png'

function Footer() {
  return (
    <div className="FooterContainer">
      <Link to="/">
        <img src={LogoDesktopFooter} alt="Logo Kasa" />
      </Link>
      <div className="TextFooter">© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
