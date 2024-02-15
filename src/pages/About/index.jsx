import Banner from '../../components/Banner'
import BannerAbout from '../../assets/Banner_about.png'
import Collapse from '../../components/Collapse'

function Home() {
  return (
    <div>
      <Banner picture={BannerAbout} />
      <Collapse />
    </div>
  )
}

export default Home
