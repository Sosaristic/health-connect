import React, { Fragment } from 'react'
import Navbar from '../Header/Navbar'
import Footer from './Footer'


function Layout({children}) {
  return (
    <Fragment>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer />

    </Fragment>
  )
}

export default Layout