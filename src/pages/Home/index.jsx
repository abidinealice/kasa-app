import Banner from '../../components/Banner'
import Card from '../../components/Card'
import BannerHome from '../../assets/Banner_home.png'
import { Link } from 'react-router-dom'
import logements from '../../data/logements.json'

function Home() {
  return (
    <div className="HomeContainer">
      <Banner picture={BannerHome} title={'Chez vous, partout et ailleurs'} />
      <div className="HomeCardContainer">
        {logements.map(({ id, title, cover }, index) => (
          <Link to={`file/${index}`} key={id}>
            <Card title={title} picture={cover} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
