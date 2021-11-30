import React from 'react'
import '../css/Recent.css'
import { BsLink } from 'react-icons/bs'

const Recent = () => {
   return (
      <section className='sec-recent'>
         <h3>Most searched results:</h3>
         <div>
            <ul>
               <li> <BsLink /> <a href='/'>Lorem</a> </li>
               <li> <BsLink /> <a href='/'>Amet</a> </li>
               <li> <BsLink /> <a href='/'>Mallit</a> </li>
               <li> <BsLink /> <a href='/'>Conseq</a> </li>
               <li> <BsLink /> <a href='/'>Dolor</a> </li>
               <li> <BsLink /> <a href='/'>Polin</a> </li>
               <li> <BsLink /> <a href='/'>Ipsum</a> </li>
            </ul>
            <p>For full reference visit <a href='/'>all tutorials</a></p>
         </div>
         
      </section>
   )
}

export default Recent
