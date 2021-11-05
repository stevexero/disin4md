import { Link } from 'react-router-dom';

import Cart from '../../assets/cart-1.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div className='Navbar-inner-container'>
        <h1>DISIN4MD</h1>
        <div className='Navbar-links'>
          <a
            href='https://discord.gg/CyQUnFZJ'
            target='_blank'
            rel='noreferrer'>
            COMMUNITY
          </a>
          <Link to='/'>SHOP</Link>
          <Link to='/'>
            <div className='Navbar-cart'>
              CART
              <img src={Cart} alt='cart' />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;