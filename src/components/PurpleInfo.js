import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { inputFocus, inputBlur } from '../js/inputFocus'
import { useRef } from 'react'
import { useState } from 'react' 
import Button from './other/Button'
import '../css/PurpleInfo.css'

const PurpleInfo = ({ action }) => {
   const span = useRef(null);
   const [val, setVal] = useState('');
   
   return (
      <section className='sec2'>
         <h2>Lorem ipsum dolore amet</h2>
         <section>
            <div>
               <AiOutlineMail />
               <span ref={ span } >Enter mail</span>
               <input 
                  value={ val }
                  onChange={ (e)=>{ setVal(e.target.value) } } 
                  onBlur={ () => inputBlur(span, val) } 
                  onFocus={ () => inputFocus(span) } 
                  type='text'>
               </input>
            </div>      
            <Button text="SEND" classtext="btn_add" action={ action } />
         </section>
         <p>Ut enim ad minima veniam, quis nostrum exercitationem</p>
         <p className='clr'>2021-12-30 molestiae non recusandae.</p>
      </section>
   )
}

export default PurpleInfo
