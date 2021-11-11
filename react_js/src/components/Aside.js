import React from 'react'
import '../css/AsideLeft/Aside.css'

const Aside = ({ title }) => {
   return (
      <aside>
         <h2> {title} </h2>
         <nav>
            <ul>
               <li> <a href='/'> Login </a> </li>
               <li> <a href='/'> Register </a> </li>
               <li> <a href='/'> Forum </a> </li>
               <li> <a href='/'> Community </a> </li>
               <li> <a href='/'> News </a> </li>
               <li> <a href='/'> About </a> </li>
            </ul>
         </nav>
      </aside>
   )
}

Aside.defaultProps = {
   title: "Aside header"
}

export default Aside
