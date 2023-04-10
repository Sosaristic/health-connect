import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
      <Outlet />
      </Layout>
    </>
  );
}

export default App;
