import '../styles/Home.css'
import Banner1 from './Banner1'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import Sponsors from './Sponsors'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <Sponsors/>
        <Banner1/>
        <Services/>
    </div>
  )
}

export default Home