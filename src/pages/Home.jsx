import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Banner/>
      <Categories/>
    </div>
  )
}

export default Home