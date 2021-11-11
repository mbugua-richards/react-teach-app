import React from 'react'
import Aside from '../Aside'
import AsideLeft from '../Aside_left'
import '../../css/AsideLeft/sec-aside-main.css'

const Aside_Main = () => {
   return (
      <section className='sec_aside_main'>
         <AsideLeft colour='yellow' percent='50'/>
         
         <Aside title='Context menu'/>         
      </section>
   )
}

export default Aside_Main
