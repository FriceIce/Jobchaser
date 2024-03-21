// @ts-nocheck
import Header from './components/header/header';
import Search from './pages/Find Job/search/Search';
import Home from './pages/Home/Home';
import './App.css';
import './media-query.css'
import { BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import FirstStep from './pages/Post Job/Form/FirstStep/FirstStep';
import { useState } from 'react';
import SecondStep from './pages/Post Job/Form/secondStep/SecondStep';
import SignInCont from './pages/Sign in/SignInCont';
import PrivateRoute from './pages/Sign in/PrivateRoute';



// React Router MAIN Components
/* 
  * BrowserRouter - It is the parent component that is used to store all of the other components. 
  * Routes - Works like a switch.
  * Route - Route is the conditionally shown component that renders some UI when its path matches the current URL.
  * Link - works like an HTML anchor tag. 
*/

function App() {
  //Använd useContext för att anropa på SetUserOnline(user) i varje route komponent nedan
  const [userOnline, setUserOnline] = useState(); 
  console.log(userOnline)
  const [job, setJob] = useState({});

  const update = (data: any) => {
    setJob({...data});
    console.log(data)
  };

  return (
    <>
      <BrowserRouter> 
        <div className='job-form-container'>
        <Header userOnline={userOnline}/>
          <Routes>
            <Route path='/Jobchaser/' element={<Home  userOnline={setUserOnline}/>}/>
            <Route path='/Jobchaser/Find-job' element={<Search />} />
            <Route path='/Jobchaser/Sign-in' element={<SignInCont userOnline={setUserOnline}/>}/>
           
            <Route element={<PrivateRoute user={userOnline} />}>
              <Route path='/Jobchaser/Sign-out' element={<h1>Sign out</h1>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

