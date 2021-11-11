import React from 'react'
import '../../css/AsideLeft/Aside_left.css'

const Circle = ({ text, percent, colour }) => {
   return (
      <div className='circleCont'>
         <h2>{ text }</h2>
         <div className='circle'>
            <div className='fill' style={{height: `${percent}%`, background: colour}}></div>
            <p>{ percent }%</p>
         </div>
      </div>
   )
}

Circle.defaultProps = {
   text: "Circle text",
   percent: "50",
   colour: "blue"
}

export default Circle
