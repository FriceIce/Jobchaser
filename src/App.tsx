import Header from './components/header/header';
import Form from './components/form/Form';
 
import './App.css';
import './media-query.css'



function App() {

  

  return (
    <>
      <Header/>
      <div className='job-form-container'>
        <Form />
      </div>
    </>
  )
}

export default App

