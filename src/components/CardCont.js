import React from 'react'
import '../css/CardCont.css'
import Card from './other/Card.js'

const CardCont = () => {
   return (
      <section className='sec4'>
         <p className='sec4pinf'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
         <div>
            <Card classes='card card-back1' header='Join community'/>
            <Card classes='card card-back2' header='Learn new Features' />
         </div>
      </section>
   )
}

export default CardCont
