import { Fragment, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/Layout/MainLayout";
import { useAuthContext } from "./context/AuthContext";
import DashboardLayout from "./components/Layout/DashboardLayout";

function App() {
  const { isAuth } =  useAuthContext()
  const { pathname } = useLocation()
  console.log({isAuth})
  return (
    isAuth ===true ? 
    <DashboardLayout>
       <Outlet /> 
    </DashboardLayout> : <Navigate to={`/login`} replace state={{path:pathname}}  />   
  );
}

export default App;
