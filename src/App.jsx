import { useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { isAuth } =  useAuthContext()
  const { pathname } = useLocation()
  console.log({isAuth})
  return (
    <>
     {isAuth ? <Layout>
      <Outlet />
      </Layout> : <Navigate to={'/login'} replace state={{path:pathname}}  />
    }
    </>
  );
}

export default App;
