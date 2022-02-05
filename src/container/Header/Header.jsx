import React from 'react';

import {images} from '../../constants'
import {SubHeading} from '../../components'

import './Header.css';

const Header = () => (
  <header className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info">
         < SubHeading title = 'Chase the new flavour'/>

           <h1 className="app__header-h1">The Key to fine dining</h1>
            <p className="p__opensans" style={{margin:'2rem 0'}}>Non cillum Lorem do veniam. Dolor excepteur aliqua anim et irure consequat duis officia enim cillum irure eu enim. Consequat est cupidatat consectetur amet quis ipsum. Officia cillum tempor non duis officia. Enim cupidatat proident commodo ad laboris et qui voluptate quis consectetur exercitation.</p>

      <button type='button' className='custom__button'>Explore more</button>
      </div>
      <div className="app__wrapper_img">
          <img src={images.welcome} alt="Welcome_image"  />
       </div>
  </header>
);

export default Header;
