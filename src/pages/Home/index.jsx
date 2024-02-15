import Banner from '../../components/Banner'
import Card from '../../components/Card'
import BannerHome from '../../assets/Banner_home.png'
import { useContext } from 'react'
import { ItemsContext } from '../../utils/context'

function Home() {
  const { logementsList } = useContext(ItemsContext)
  return (
    <div>
      <Banner picture={BannerHome} title={'Chez vous, partout et ailleurs'} />
      <div className="HomeContainer">
        {logementsList.map(({ id, title, cover }) => (
          <Card key={id} title={title} picture={cover} />
        ))}
      </div>
    </div>
  )
}

export default Home
