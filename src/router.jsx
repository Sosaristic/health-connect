import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import BookAppointment from "./pages/BookAppointment";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/book-appointment", element: <BookAppointment /> },
    ],
  },
  {
    path: "/login",
    element: <Register />,
  },

  {
    path: "/sign-up",
    element: <Register />,
  },
]);
