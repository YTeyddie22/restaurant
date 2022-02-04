import React from 'react';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import {GiHamburgerMenu}  from 'react-icons/gi'
import './Navbar.css';

import images from '../../constants/images'

const Navbar = () => (
  <nav className="app__navbar">
    <div className = "app__navbar-logo" >
<img src={images.gericht} alt="App LOGO" />
    </div>

<ul className="app__navbar-links">
  <li className="p__opensans"><a href="#home">Home</a></li>
  <li className="p__opensans"><a href="#about">About us</a></li>
  <li className="p__opensans"><a href="#menu">Menu</a></li>
  <li className="p__opensans"><a href="#awards">Awards</a></li>
  <li className="p__opensans"><a href="#contacts">Contacts</a></li>
</ul>

<div className="app__navbar-login">
<a href="#login" className="p__opensans">Login / Sign up</a>
<div/>

<a href="/"className="p__opensans">Bookings</a>
</div>

  </nav>
);

export default Navbar;
