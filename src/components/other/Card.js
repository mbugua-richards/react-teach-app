import React from 'react'
import '../../css/Card.css'
import Button from './Button'
import { arrList } from '../../js/wordGen'

const Card = ({ header, classes }) => {
   const arr = arrList(4, 3, 2);

   return (
      <section className={ classes }>
         <h1>{ header }</h1>
         <ul>
            {
               arr.map((item,ind) => (
                  <li key={ind}>{ item }</li>
               ))
            }
         </ul>
         <Button classtext='card_btn' text='Learn more'/>
      </section>
   )
}

Card.defaultProps = {
   header: "Card header",
   num: 2
}

export default Card
