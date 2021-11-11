import React from 'react'
import '../css/Recent.css'
import { useState, useEffect } from 'react'

const Recent = () => {
  const [pop,setPop] = useState([]);
  useEffect(()=>{
   fetch('/api/popular')
   .then(res => res.json())
   .then(data => setPop(data));
  }, [])

   return (
      <section className='sec-recent'>
         <h3>Most searched results:</h3>
         <div>
            <ul>
               {
                  pop.map((item,ind)=>(
                     <li key={ind}> <a href='/'>{item.title}</a> </li>
                  ))
               }
            </ul>
            <p>For full reference visit <a href='/'>all tutorials</a></p>
         </div>
         
      </section>
   )
}

export default Recent
