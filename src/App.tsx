// @ts-nocheck

// Components
import Header from './components/header/header';
import Search from './pages/Find Job/search/Search';
import Home from './pages/Home/Home';
import SignInCont from './pages/Sign in/SignInCont';
import Profile from '../src/pages/Profile/Profile'
import PrivateRoute from './pages/Sign in/PrivateRoute';

// Style
import './App.css';
import './media-query.css'

//React 
import { BrowserRouter, Routes, Route, Navigate, Outlet, useNavigate} from 'react-router-dom';
import FirstStep from './pages/Post Job/Form/FirstStep/FirstStep';
import { useState, useEffect, createContext } from 'react';

// firebase
import firebaseSignIn, { getDataFromDB, registerUser, updateData} from '../database/firebase';
import SignOut from './pages/Sign in/SignOut';
import { update } from 'firebase/database';
import { savedJobsObserver } from '../database/firebase';

// useContext
export const Context = createContext(); 

function App() {
  //Använd useContext för att anropa på SetUserOnline(user) i varje route komponent nedan
  const [isOnline, setIsOnline] = useState(null); 
  const [isDarkTheme, setIsDarkTheme] = useState(false); 
  const [textColorHeader, setTextColorHeader] = useState('');
  const [savedJobAds, setSavedJobAds] = useState([]);
  const [jobs, setJobs] = useState(null);
  
  const contextValues = {
    setJobs,
    jobs,
    setSavedJobAds,
    savedJobAds,
    isOnline,
    isDarkTheme,
    textColorHeader,
    setTextColorHeader,
    color: isDarkTheme ?  '#ffff' : '',
    background: isDarkTheme ? 'linear-gradient(147deg, #4d4855 0%, #000000 74%)' : 'whitesmoke',
    bgTheme: isDarkTheme ? 
    {
      // backgroundColor: '#1e1e1e',
      backgroundColor: '#4d4855',
      background: 'linear-gradient(147deg, #4d4855 0%, #000000 74%)',
      color: '#ffff'
    } : {}
  } 
  
  // Checks for user activity
  const {auth, onAuthStateChanged} = firebaseSignIn(); 
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
    if(user) {

      const response = getDataFromDB('users', user.uid); 
      response.then(data =>{
        if(!data){
          console.log('data is', data)
          registerUser(user.uid, user.email, user.displayName, null, user.photoURL);
          const newResponse = getDataFromDB('users', user.uid); 
          newResponse.then(newData => setIsOnline(newData));
          return 
        }

        setIsOnline(data) // 
      })
      return
    } 
      setSavedJobAds([])
      setIsOnline(user); 
      console.log(user)
    })

    return () => subscriber; 
  }, [])
  
  // Checks for changes in database for SavedJobs sektion. 
  useEffect(() => {
    if(!isOnline) return
    const response = savedJobsObserver(isOnline.userId);
    response.then((data =>{
      const savedAds = data.jobs; 
      setSavedJobAds(savedAds)
      console.log('saved Jobs:', data.jobs)
    }))
    return
  },[isOnline])
  return (
    <>
      <BrowserRouter> 

      <Context.Provider value={contextValues}>
        <Header toggleDarkTheme={setIsDarkTheme}/>
        <main className='job-form-container'>
          <Routes>
            <Route path='/Jobchaser/' element={<Home  /* userOnline={setUserOnline} *//>}/>
            <Route path='/Jobchaser/Find-job' element={<Search />} />
            <Route path='/Jobchaser/Sign-in' element={ !isOnline ? <SignInCont /> : <Navigate to="/Jobchaser/User-profile" />}/>
            <Route path='/Jobchaser/User-profile' element={ !isOnline ? <SignInCont /> : <Profile />}/>
           
            {/* <Route element={<PrivateRoute />}>
              <Route path='/Jobchaser/User-profile' element={<Profile />} />
            </Route> */}
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