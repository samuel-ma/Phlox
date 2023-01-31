import '../styles/Services.css';
import { BsStack, BsArrowRight } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { HiMail, HiGift } from "react-icons/hi";

const Services = () => {

  return (
    <div className='services'>
        <p>Our Services</p>
        <h1 className='save'>Save Time Managing Social Media For Your Business</h1>

        <div className='myServices'>

            <div className='service1'>
                <div className='icon'>
                    <BsStack/>
                </div>
                <h1 className='digital'>Digital Agency</h1>
                <p className='desc'>There are many variations passages of Lorem Ipsum majority some by injected or randomised</p>
                <div className='icon2'>
                    <BsArrowRight />
                </div>
            </div>
            <div className='service1'>
                <div className='icon'>
                    <FaBell/>
                </div>
                <h1 className='digital'>Team Accounts</h1>
                <p className='desc'>There are many variations passages of Lorem Ipsum majority some by injected or randomised</p>
                <div className='icon2'>
                    <BsArrowRight />
                </div>
            </div>
            <div className='service1'>
                <div className='icon'>
                    <HiMail/>
                </div>
                <h1 className='digital'>Email Marketing</h1>
                <p className='desc'>There are many variations passages of Lorem Ipsum majority some by injected or randomised</p>
                <div className='icon2'>
                    <BsArrowRight />
                </div>
            </div>
            <div className='service1'>
                <div className='icon'>
                    <HiGift/>
                </div>
                <h1 className='digital'>API References</h1>
                <p className='desc'>There are many variations passages of Lorem Ipsum majority some by injected or randomised</p>
                <div className='icon2'>
                    <BsArrowRight />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services