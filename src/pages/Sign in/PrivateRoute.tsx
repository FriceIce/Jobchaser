// @ts-nocheck 
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { Context } from "../../App";
function PrivateRoute() {
  const userIsOnline = useContext(Context)
  return (
    <>
      {userIsOnline ? <Outlet/> : <Navigate to='/Jobchaser/Sign-in'/> }
    </>
  )
}

export default PrivateRoute; 