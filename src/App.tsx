// @ts-nocheck
// Components
import Header from './components/header/header';
import Search from './pages/Find Job/search/Search';
import Home from './pages/Home/Home';
import SignInCont from './pages/Sign in/SignInCont';
import Profile from '../src/pages/Profile/Profile'
import LoadingScreen from './pages/Find Job/LoadingScreen/LoadingScreen'

// Style
import './App.css';
import './media-query.css'

//React 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

// firebase
import firebaseSignIn, { getDataFromDB, registerUser } from '../database/firebase';
import { savedJobsObserver } from '../database/firebase';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { userState, jobListing, User } from './features/user/userSlice';
import { RootState } from './redux/store';

function App() {
  const {isOnline, isFetchingUserData} = useSelector((state: RootState) => state.user); 
  const dispatch = useDispatch(); 

  // Checks for user activity
  const {auth, onAuthStateChanged} = firebaseSignIn(); 
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {

      if(user) {
        const response = getDataFromDB('users', user.uid); 
        response.then((data) => {
          if(!data && user.emailVerified){
            console.log('data is', data)
            registerUser(user.uid, user.email, user.displayName, null, user.photoURL);
            const newResponse = getDataFromDB('users', user.uid); 
            newResponse.then(newData => dispatch(userState(newData)));
            return 
          } else if (!data && !user.displayName) return

          // console.log(data)
          dispatch(userState(data)) // 
        })
        return
      } 

      
      dispatch(jobListing([]));
      dispatch(userState(false)); 
      console.log(user)
    })
    
     
    return () => subscriber();
  }, [])
  
  // Checks for changes in database for SavedJobs sektion. 
  useEffect(() => {
    if(!isOnline) return
    const response = savedJobsObserver(isOnline.userId);
    response.then((data =>{
      const savedAds = data.jobs; 
      dispatch(jobListing(savedAds));
      // console.log('saved Jobs:', data.jobs)
    }))
    return
  },[isOnline])

  const componentForUserState = (isOnline: null | false | User) => {
    if(isOnline === null) return <LoadingScreen type='loaderProgress' />
    if(isOnline === false) return <Navigate to="/Jobchaser/Sign-in" />
    if(isOnline) return <Profile />
  }

  return (
    <>
      <BrowserRouter> 
        <Header />
        <main className='job-form-container'>
          <Routes>
            <Route path='/Jobchaser/' element={<Home />}/>
            <Route path='/Jobchaser/Find-job' element={<Search />} />
            <Route path='/Jobchaser/Sign-in' element={ !isOnline ? <SignInCont /> : <Navigate to="/Jobchaser/User-profile" />}/>
            <Route path='/Jobchaser/User-profile' element={componentForUserState(isOnline)}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;