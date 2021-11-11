import React from 'react'
import '../css/CodeSect.css'
import Figure from './other/Figure'
import codeExample from '../images/codeExample.png'
import arrow from '../images/arrow2.png'

const CodeSect = () => {
   return (
      <section className='sec3'>
         <article>
            <Figure cn='sec3fig' source={ codeExample } htext='' text1='' text2=''/>
         </article>

         <article>
            <div>
               <h1>Lorem ipsum examples</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ounde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi.</p>
            </div>
            
            <div className='arrdiv'>
               <img alt='' src={arrow}></img>
               <p>Evoluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>            
         </article>
      </section>
   )
}

export default CodeSect
