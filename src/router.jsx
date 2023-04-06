import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Register from "./pages/Register"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/login",
      element: <Register />
    },
  
    {
      path: "/sign-up",
      element: <Register />
    },
  ])