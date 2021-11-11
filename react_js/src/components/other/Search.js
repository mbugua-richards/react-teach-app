import React from 'react'
import '../../css/Search.css'
import { BiSearch } from 'react-icons/bi'

const Search = ({ setClass, setPlaceholder }) => {
   return (
      <div className='srchDiv'>
         <BiSearch /> <input spellCheck='false' type='text' className={ setClass } placeholder={ setPlaceholder }></input>
      </div> 
   )
}

Search.defaultProps = {
   setClass : '',
   setPlaceholder : 'Enter text here...'
}

export default Search
