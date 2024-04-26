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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

// firebase
import firebaseSignIn, { getDataFromDB, registerUser } from '../database/firebase';
import { savedJobsObserver } from '../database/firebase';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { userState, jobListing, User } from './features/user/userSlice';
import { RootState } from './redux/store';

// TS
import { Card } from './features/search/cardType';

// import images
import home from '../Images/Preload_Images/home-page-hero-pic.avif'
import job from '../Images/Preload_Images/start-page-background.jpg'
import signIn from '../Images/Preload_Images/office-sign-in.avif'
import writer from '../Images/Preload_Images/skrivmaskin.avif'
import cacheImages from './modules/imagePreloader';

// context
export const PreloadContext = createContext<HTMLImageElement[]>([]);

function App() {
  const [preloadImg, setPreloadImg] = useState<HTMLImageElement[]>([]);
  const {isOnline} = useSelector((state: RootState) => state.user); 
  const dispatch = useDispatch(); 

  // Checks for user activity
  const {auth, onAuthStateChanged} = firebaseSignIn(); 
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {

      if(user) {
        const response = getDataFromDB('users', user.uid) as Promise<User>; 
        response.then((data: User) => {
          if(!data && user.emailVerified){
            console.log('data is', data)
            registerUser(user.uid, user.email!, user.displayName, null, user.photoURL);
            const newResponse = getDataFromDB('users', user.uid) as Promise<User>; 
            newResponse.then((newData) => dispatch(userState(newData)));
            return 
          } else if (!data && !user.displayName) return

          // console.log(data)
          dispatch(userState(data)) // 
        })
        console.log('Email is verified: ', user!.emailVerified);
        return
      } 

      dispatch(jobListing([]));
      dispatch(userState(false)); 
    })
    
    return () => subscriber();
  }, [auth])
  
  // Checks for changes in database for SavedJobs sektion. 
  useEffect(() => {
    if(!isOnline) return
    const response = savedJobsObserver(isOnline.userId) as Promise<{jobs: Card[]}>;
    response.then((data =>{
      const savedAds = data.jobs; 
      dispatch(jobListing(savedAds));
      // console.log('saved Jobs:', data.jobs, data)
    }))
    return
  },[isOnline])

  const componentForUserState = (isOnline: null | false | User) => {
    if(isOnline === null) return <LoadingScreen type='loaderProgress' />
    if(isOnline === false) return <SignInCont />
    if(isOnline) return <Profile />
  }

  const preloadImages = [home, job, signIn, writer];
  useEffect(() => {
    cacheImages(preloadImages, setPreloadImg);
  }, []);

  


  return (
    <>
      <PreloadContext.Provider value={preloadImg}>
        <BrowserRouter>
          <Header />
          <main className='job-form-container'>
            <Routes>
              <Route path='/Jobchaser/' element={isOnline === null ? <LoadingScreen type='loaderProgress' /> : <Home />}/>
              <Route path='/Jobchaser/Find-job' element={isOnline === null ? <LoadingScreen type='loaderProgress' /> : <Search />} />
              <Route path='/Jobchaser/Sign-in' element={componentForUserState(isOnline)}/>
              <Route path='/Jobchaser/User-profile' element={componentForUserState(isOnline)}/>
            </Routes>
          </main>
        </BrowserRouter>
      </PreloadContext.Provider>
    </>
  )
}

export default App;