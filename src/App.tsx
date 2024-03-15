import Header from './components/header/header';
import Search from './components/search/Search';
// import AddJob from './components/AddJob/AddJob';
 
import './App.css';
import './media-query.css'



function App() {

  return (
    <>
      <Header/>
      <div className='job-form-container'>
        <Search />
        {/* <AddJob /> */}
      </div>
    </>
  )
}

export default App

