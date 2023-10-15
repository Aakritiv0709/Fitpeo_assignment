import React from "react";
import { RouterProvider, createBrowserRouter,Route,createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Components/Dashboard";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Dashboard/>} />
    
    </Route>
  )
);
const App=()=>
{
  return(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>   
  )
}
export default App;