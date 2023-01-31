import '../styles/Navbar.css';
import logo from "../assets/logo (1).png";

const Navbar = () => {
  return (
    <section className='navbar'>
        <img className='logo' src={logo} alt="logo" />

        <div className='navlinks'>
            <a href="_blank">Home</a>
            <a href="_blank">About</a>
            <a href="_blank">Blog</a>
            <a href="_blank">Project</a>
            <a href="_blank">Contact</a>
        </div>

            <button className='started'>
                Get Started
            </button>
    </section>
  )
}

export default Navbar