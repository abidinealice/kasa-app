import Banner from '../../components/Banner'
import Card from '../../components/Card'
import BannerHome from '../../assets/Banner_home.png'

function Home() {
  return (
    <div>
      <Banner picture={BannerHome} title={'Chez vous, partout et ailleurs'} />
      <Card />
    </div>
  )
}

export default Home
