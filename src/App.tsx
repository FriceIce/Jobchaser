// @ts-nocheck

// Components
import Header from './components/header/header';
import Search from './pages/Find Job/search/Search';
import Home from './pages/Home/Home';
import SignInCont from './pages/Sign in/SignInCont';
import PrivateRoute from './pages/Sign in/PrivateRoute';

// Style
import './App.css';
import './media-query.css'

//React 
import { BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import FirstStep from './pages/Post Job/Form/FirstStep/FirstStep';
import { useState, useEffect, createContext } from 'react';

// firebase
import firebaseSignIn from '../src/pages/Sign in/firebase';
import SignOut from './pages/Sign in/SignOut';

// useContext
export const Context = createContext(); 

function App() {
  //Använd useContext för att anropa på SetUserOnline(user) i varje route komponent nedan
  const [isOnline, setIsOnline] = useState(null); 
  const [isDarkTheme, setIsDarkTheme] = useState(false); 

  const contextValues = {
    isOnline,
    isDarkTheme,
    color: isDarkTheme ?  '#ffff' : '',
    bgTheme: isDarkTheme ? 
    {
      backgroundColor: '#1e1e1e',
      color: '#ffff'
    } : {}
  }
  
  const {auth, onAuthStateChanged} = firebaseSignIn(); 
  
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
    if(user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setIsOnline(user);
      // ...
      
    } 
    
      setIsOnline(user); 
      console.log(user)
    })

    return () => subscriber; 
  }, [])

  

  const [job, setJob] = useState({});
  
  const update = (data: any) => {
    setJob({...data});
    console.log(data)
  };

  return (
    <>
      <BrowserRouter> 

      <Context.Provider value={contextValues}>
        <Header toggleDarkTheme={setIsDarkTheme}/>
        <main style={isDarkTheme ? contextValues.bgTheme : {}} className='job-form-container'>
          <Routes>
            <Route path='/Jobchaser/' element={<Home  /* userOnline={setUserOnline} *//>}/>
            <Route path='/Jobchaser/Find-job' element={<Search />} />
            <Route path='/Jobchaser/Sign-in' element={<SignInCont /* userOnline={setUserOnline} *//>}/>
           
            <Route element={<PrivateRoute />}>
              <Route path='/Jobchaser/Sign-out' element={<SignOut />} />
            </Route>
          </Routes>
        </main>
      </Context.Provider>

      </BrowserRouter>
    </>
  )
}

export default App


// React Router MAIN Components
/* 
  * BrowserRouter - It is the parent component that is used to store all of the other components. 
  * Routes - Works like a switch.
  * Route - Route is the conditionally shown component that renders some UI when its path matches the current URL.
  * Link - works like an HTML anchor tag. 
*/