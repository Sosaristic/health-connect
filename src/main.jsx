import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom"
import './index.css'
import { AppProvider } from './context/AppContext'
import { router } from './router'
import { AuthProvider } from './context/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <AppProvider>
      <RouterProvider router={router}/>
     </AppProvider>
    </AuthProvider>
  </React.StrictMode>,
)
