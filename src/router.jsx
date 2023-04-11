import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import BookAppointment from "./pages/BookAppointment";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/book-appointment", element: <BookAppointment /> },
    ],
  },

  { path: "/", 
      element:<Layout><Home /></Layout>  },

  {
    path: "/login",
    element: <Register />,
  },

  {
    path: "/sign-up",
    element: <Register />,
  },
]);
