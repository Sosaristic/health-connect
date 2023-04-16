import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MainLayout from "./components/Layout/MainLayout";
import PatientProfile from "./pages/PatientProfile";
import SettingPage from "./pages/SettingPage";
import HistoryPage from "./pages/HistoryPage";
import Notification from "./pages/Notification";
import OverviewPage from "./pages/OverviewPage";
import DoctorProfile from "./pages/DoctorProfile";
import { BookingPage } from "./components/BooKAppointment";
import BookAppointment from "./pages/BookAppointment";

export const router = createBrowserRouter([
  { 
    path:'/',
    element:<MainLayout />,
    children: [
      { path: "", element: <Home /> },
   ],
  },
  { 
    path: "/dashboard", element:<App />,
    children: [
    { path: "overview", element: <OverviewPage />},
  
    { path: "patient", element:<PatientProfile /> }, 
    { path: "doctor", element:<DoctorProfile /> },
    { path: "setting", element:<SettingPage /> },
    { path: "history", element:<HistoryPage /> },
    { path: "notification", element:<Notification /> },
    { path:'appointment',element: <BookAppointment />,
     children:[
         {path:':id',element: <BookingPage />}
       ]
    },
    
    ]
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
