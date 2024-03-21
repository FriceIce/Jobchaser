// @ts-nocheck 
import { Navigate, Outlet } from "react-router-dom"
function PrivateRoute({user}) {

  return (
    <>
      {user ? <Outlet/> : <Navigate to='/Jobchaser/Sign-in'/> }
    </>
  )
}

export default PrivateRoute; 