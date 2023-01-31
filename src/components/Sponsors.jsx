import '../styles/Sponsors.css';
import client1 from '../assets/client (1).png';
import client2 from '../assets/client (2).png';
import client3 from '../assets/client (3).png';
import client4 from '../assets/client (4).png';
import client5 from '../assets/client (5).png';
import client6 from '../assets/client (6).png';

const Sponsors = () => {
  return (
    <div className='sponsors'>
        <img src={client3} alt="sponsors" />
        <img src={client2} alt="sponsors" />
        <img src={client6} alt="sponsors" />
        <img src={client4} alt="sponsors" />
        <img src={client5} alt="sponsors" />
        <img src={client1} alt="sponsors" />
    </div>
  )
}

export default Sponsors