import React from 'react'
import {Link} from 'react-router-dom';
import HopeHacksLogoImage from '../assets/hopeHackslogo.webp'

function Header() {
  return (
    <header>
    <div className='navbar'>
    <div className='logo'><a href="/" title="Home"><img src={HopeHacksLogoImage} alt='logo' style={{width:'200px'}} ></img></a></div>
  <Link to= "/">Home </Link>
  <Link to= "/aboutus"> About Us </Link>
  <Link to= "/foodpantry"> Need Help?</Link>
  <Link to= "/createpost"> Newsletter </Link>
  </div>
  </header>
  )
}

export default Header