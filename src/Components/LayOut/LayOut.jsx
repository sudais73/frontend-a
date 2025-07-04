/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function LayOut({children}) {
  return (
    <div>
      <Header/>
      {children}
     <Footer/>
    </div>
  )
}

export default LayOut
