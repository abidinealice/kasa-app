import Banner from '../../components/Banner'
import BannerHome from '../../assets/Banner_home.png'

function Home() {
  return (
    <div>
      <Banner picture={BannerHome} title={'Chez vous, partout et ailleurs'} />
      <p>C'est la page home</p>
    </div>
  )
}

export default Home
