import React from 'react'
import '../css/AsideLeft/Aside_left.css'
import Circle from './other/Circle'
import Recent from './Recent'
import Autor from './other/Autor'

const Aside_left = ({ colour, percent }) => {
   return (
      <article className='left_as'>
         <h1>Lorem ipsum sit amet</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
         <section className='cCont'>
            <Circle text='Circle one' percent='85' colour='rgba(61, 139, 242, .5)' />
            <Circle text='Circle two' percent='65' colour='rgba(61, 242, 103, .7)' />
         </section>

         <Recent />

         <Autor author='Name Surename' />
      </article>
   )
}

export default Aside_left
