import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom'

const Layout = (props) => {
   return (
      <div>
         <Router>
            <Nav />
            {
               props.children
            }
            <Footer />
         </Router>
      </div>
   )
}

export default Layout
