import React from 'react'
import './css/index.css'
import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import SendConfirm from './components/SendConfirm'
import Layout from './components/Layout/Layout'
import MainPage from './components/Pages/MainPage'

function App() {
  const [sendMail, setSendMail] = useState(false);
  function sent(){
    setSendMail(true)
  }
  function sendCancel(){
    setSendMail(false)
  }
  function sendConfirm(){
    console.log('sent');
  }

  return (
    <Layout>
      {sendMail && <SendConfirm actConfirm={ sendConfirm } actCancel={ sendCancel }/>}

      <Routes>
        <Route exact path="/" element={ <MainPage send={ sent } /> }/>           
      </Routes>
    </Layout>  
  );
}

export default App;
