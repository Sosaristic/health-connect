import React, { Fragment } from 'react'
import Navbar from '../Header/Navbar'
import Footer from './Footer';
import { Outlet } from 'react-router-dom'


function MainLayout() {
  return (
    <Fragment>
        <Navbar/>
        <main>
            <Outlet />
        </main>
        <Footer />

    </Fragment>
  )
}

export default MainLayout