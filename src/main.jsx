import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom"
import './index.css'
import { AppProvider } from './context/AppContext'
import { router } from './router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router}/>
    </AppProvider>
  </React.StrictMode>,
)
