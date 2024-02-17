import Banner from '../../components/Banner'
import BannerAbout from '../../assets/Banner_about.png'
import Collapse from '../../components/Collapse'
import aboutkasa from '../../data/aboutkasa.json'

function Home() {
  return (
    <div>
      <Banner picture={BannerAbout} />
      {aboutkasa.map(({ id, category, description }) => (
        <Collapse key={id} category={category} description={description} />
      ))}
    </div>
  )
}

export default Home
