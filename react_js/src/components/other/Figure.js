import React from 'react'
import '../../css/Figure.css'

const Figure = ({ source, cn, htext, text1, text2 }) => {
   return (
      <figure className={ cn }>
         <img style={ proportions } src={ source } alt=''></img>
         <figcaption>
            <h1>{ htext }</h1>
            <p>{ text1 }</p>
            <p>{ text2 }</p>
         </figcaption>
      </figure>
   )
}

Figure.defaultProps = {
   text1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
   text2 : "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   htext: "Lorem ipsum dolore"
}

const proportions = {
   width : "100%",
   height : "100%"
}

export default Figure
