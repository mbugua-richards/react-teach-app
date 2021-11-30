import React from 'react'
import Header from '../Header'
import Introduction from '../Introduction'
import PurpleInfo from '../PurpleInfo'
import Figure from '../other/Figure'
import CodeSect from '../CodeSect'
import CardCont from '../CardCont'
import Search from '../other/Search'
import AsideMain from '../Layout/Aside_Main'
import codegif from '../../images/code.gif'

const MainPage = ({ send }) => {
   return (
      <div>
         <Header text='Introduce' classtext='fig_btn'/>
          <main>
            <Introduction liClName='classlist'/>
            <PurpleInfo action={ send } />
            <Figure source={ codegif } cn='fig1' htext='LEARN JAVASCRIPT HERE' />
            <CodeSect />
            <CardCont />

            <Search setClass='srchInp'/>     
            <AsideMain />
          </main>
      </div>
   )
}

export default MainPage
