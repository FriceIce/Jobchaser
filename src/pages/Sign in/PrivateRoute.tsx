// @ts-nocheck 
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { Context } from "../../App";
function PrivateRoute() {
  const { isOnline } = useContext(Context);

  return isOnline ? 
  (
    <Outlet/> 
  )
  : 
  (
   <Navigate to='/Jobchaser/Sign-in'/>
  );
}

export default PrivateRoute; 