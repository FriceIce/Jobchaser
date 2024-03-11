import './form.css';
import searchIcon from './assets/Search SVG Vector.svg';
import Card from '../Card/Card';
import { useState } from 'react';
import useFetch from '../../hook/useFetch';

function Form(){
  const [input, setInput] = useState('')
  const {data, error} = useFetch('data/jobs.json'); 
  // const [submit, setSubmit] = useState('')

  const inputValue = (input: React.ChangeEvent<HTMLInputElement>) => {
    return setInput(input.target.value)
  }

  // function onsubmit(input: string){
  //   setSubmit(input);
  //   return submit;
  // }

  return (
    <>
      <form tabIndex={0} className='job-form' onSubmit={(e) => {
        e.preventDefault();
        // return onsubmit(input);
      }}>
        <div className="input-container">
          <button className='search-btn'><img src={searchIcon} alt="magnifying glass" /></button>
          <input value={input} onChange={(e) => inputValue(e)} type="text" placeholder='Jobbtitel, nyckelord eller företag' aria-label='Search bar for job ads'/>
        </div>
      </form>
      { data && <Card jobs={data} input={input} />}
      {error && <h1>{error}</h1>}
    </>
  )
}

export default Form;