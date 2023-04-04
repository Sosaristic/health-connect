import React, { Fragment } from 'react'
import Navbar from '../Header/Navbar'


function Layout({children}) {
  return (
    <Fragment>
        <Navbar/>
        <main>
            {children}
        </main>

    </Fragment>
  )
}

export default Layout