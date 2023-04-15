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
    { path: "doctor", element:<PatientProfile /> },
    { path: "setting", element:<SettingPage /> },
    { path: "history", element:<HistoryPage /> },
    { path: "notification", element:<Notification /> },
  
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
