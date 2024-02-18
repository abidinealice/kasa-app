import { Link } from 'react-router-dom'
import LogoError from '../../assets/Logo_error_desktop.png'

function Error() {
  return (
    <div className="ErrorContainer">
      <img src={LogoError} alt="Erreur 404" />
      <div className="ErrorText">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="ErrorLink">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  )
}

export default Error
