import Banner from '../../components/Banner'
import BannerAbout from '../../assets/Banner_about.png'

function Home() {
  return (
    <div>
      <Banner picture={BannerAbout} />
      <p>C'est la page a propos</p>
    </div>
  )
}

export default Home
