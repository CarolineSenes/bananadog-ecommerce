import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Products from '../components/Products'


const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Banner/>
      <Categories/>
      <Products />
    </div>
  )
}

export default Home