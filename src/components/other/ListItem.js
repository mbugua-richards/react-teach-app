import React from 'react'

const ListItem = ({ text, classn }) => {
   return (
      <li className={ classn }> {text} </li>
   )
}

export default ListItem
