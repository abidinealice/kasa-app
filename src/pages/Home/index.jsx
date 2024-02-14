import Banner from '../../components/Banner'
import Card from '../../components/Card'
import BannerHome from '../../assets/Banner_home.png'

function Home() {
  return (
    <div>
      <Banner picture={BannerHome} title={'Chez vous, partout et ailleurs'} />
      <p>C'est la page home</p>
      <div className="HomeContainer">
        <Card />
      </div>
    </div>
  )
}

export default Home
