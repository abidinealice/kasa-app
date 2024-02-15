import Banner from '../../components/Banner'
import BannerAbout from '../../assets/Banner_about.png'
import Collapse from '../../components/Collapse'

function Home() {
  return (
    <div>
      <Banner picture={BannerAbout} />
      <p>C'est la page a propos</p>
      <Collapse />
    </div>
  )
}

export default Home
