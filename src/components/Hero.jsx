import '../styles/Hero.css';
import { BsPlayFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='hero'>
        <div>
            <p className='agency'>Advertisement Agency</p>
            <h1>A Simple And Smart Tool That Will Help Grow Your Business</h1>
            <p className='many'>There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected or randomised .</p>
            
            <button className='read'>
                <p>Read More</p>
                <BsPlayFill/>
            </button>
        </div>
    </div>
  )
}

export default Hero