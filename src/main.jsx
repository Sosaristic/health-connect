import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App'
import './index.css'
import { AppProvider } from './context/AppContext'
import Register from './pages/Register'
import { router } from './router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router}/>
    </AppProvider>
  </React.StrictMode>,
)
