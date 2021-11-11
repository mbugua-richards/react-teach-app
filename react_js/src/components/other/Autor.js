import React from 'react'
import '../../css/Autor.css'
import avatar from '../../images/avatar.png'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGooglePlusCircle, AiFillYoutube } from 'react-icons/ai'
import { FaSteam } from 'react-icons/fa'

const Autor = ({ author }) => {
   return (
      <section className='sec-autor'>
         <div className='aut-inf'>
            <div>
               <img alt='' src={avatar}></img>
            </div>     
            <p>{ author }</p>
         </div>
         <div className='aut-text'>
            <p> <span> { author } </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
         <div className='aut-icons'>
            <a href='/'> <FaSteam /> </a>
            <a href='/'> <AiFillYoutube /> </a>
            <a href='/'> <BsFacebook /> </a>
            <a href='/'> <AiFillGooglePlusCircle /> </a>
         </div>
      </section>
   )
}

export default Autor
