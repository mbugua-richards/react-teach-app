import React from 'react'
import Button from './other/Button'

const sendConfirm = ({ actConfirm, actCancel }) => {
   return (
      <section className='sendConf'>
         <h1>Are you sure?</h1>
         <div>
            <Button text="Confirm" colour="rgb(0, 221, 0)" action={ actConfirm }/>
            <Button text="Cancel" colour="red" action={ actCancel }/>
         </div>
      </section>
   )
}

export default sendConfirm
