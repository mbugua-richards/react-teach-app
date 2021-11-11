import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, classtext, action, colour}) => {
   const basic = {
      padding: ".5em 2em",
      background: "none",
      outline: "none",
      color: colour,
      border: `2px solid ${colour}` ,
      borderRadius: ".2em",
      fontWeight: "700",
      margin: "1em",
      cursor: "pointer",
      fontSize: "1.1rem"
   }

   return (
      <button style={ classtext === '' ? basic : null } className={ classtext } onClick={ action }>
         <span> { text } </span>
      </button>
   )
}

Button.defaultProps = {
   action : () => { console.log('Empty onclick') },
   text : "Button",
   classtext : "",
   colour: 'black'
}

Button.propTypes = {
   action : PropTypes.func,
   text : PropTypes.string,
   classtext : PropTypes.string
}

export default Button
