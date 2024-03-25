import { useNavigate } from "react-router-dom";

function SignOut(){
  setTimeout(() => {
    const navigate = useNavigate();
    navigate('/Jobchaser/')
  }, 3000);
  return (
    <h1>Signing out...</h1>
  )
}

export default SignOut;