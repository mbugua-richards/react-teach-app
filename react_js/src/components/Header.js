import React from 'react'
import { useRef } from 'react'
import '../css/Header.css'
import himg1 from '../images/header1.png'
import Button from './other/Button'

const Header = ({ text, classtext }) => {
   const myref = useRef(null);

   const func = () =>{
      myref.current.style.background='red'
   }

   return (
      <header className='header1'>
         <figure>
            <img src={himg1} alt='' />
            <figcaption>
               <h1>Lorem ipsum dolore</h1>
               <p ref={ myref }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Duis aute irure dolor in reprehenderit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
               <Button text={ text } classtext={ classtext } action={ func }/>
            </figcaption>
         </figure>
      </header>
   )
}

export default Header
