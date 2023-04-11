import React, { useState } from 'react';
import { Outlet,Navigate, useLocation } from 'react-router-dom'

function ProtectedRoute({children}) {
    const [ isLogIn, setIslogin] = useState(false)
    const {pathname} = useLocation()

  return (
    isLogIn ? <Outlet /> : <Navigate  to='/login' replace state={{ path: pathname }} /> 
  )
}

export default ProtectedRoute