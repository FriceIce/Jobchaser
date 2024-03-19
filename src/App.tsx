import Header from './components/header/header';
import Search from './pages/Find Job/search/Search';
import Home from './pages/Home/Home';
import './App.css';
import './media-query.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import FirstStep from './pages/Post Job/Form/FirstStep/FirstStep';
import { useState } from 'react';
import SecondStep from './pages/Post Job/Form/secondStep/SecondStep';



// React Router MAIN Components
/* 
  * BrowserRouter - It is the parent component that is used to store all of the other components. 
  * Routes - Works like a switch.
  * Route - Route is the conditionally shown component that renders some UI when its path matches the current URL.
  * Link - works like an HTML anchor tag. 
*/



function App() {

  const [job, setJob] = useState({});

  const update = (data: any) => {
    setJob({...data});
    console.log(data)
  };

  return (
    <>
      <BrowserRouter> 
        <div className='job-form-container'>
        <Header/>
          <Routes>
            <Route path='/Jobchaser' element={<Home />}/>
            <Route path='/Jobchaser/Find-job' element={<Search />} />
            <Route path='/Post-job' element={<FirstStep job={job} update={update}/>} />
            <Route path='/Post-job/Second-step' element={<SecondStep job={job} update={update}/>} />
            <Route path='/Jobchaser/Sign-in' element={<h1>Sign in</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

