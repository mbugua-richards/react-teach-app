import React from 'react'
import '../../css/Nav.css'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Nav = () => {
   return (
      <nav className='nav1'>
         <p className='inf-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <div className='row'>
            <div>
               <h1>Website title</h1>
               <p>Oconsectetur adipiscing</p>
            </div>
            
            <ul>
               <Link to='/'> <li> Home </li> </Link>
               <a href='/'> <li> Tutorials <RiArrowDropDownFill /> </li> </a>
               <a href='/'> <li> About <RiArrowDropDownFill /> </li> </a>
            </ul>
         </div>     
      </nav>
   )
}

export default Nav
