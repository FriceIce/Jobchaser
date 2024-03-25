// @ts-nocheck
import './search.css';
import searchIcon from './assets/Search SVG Vector.svg';
import { useEffect, useState } from 'react';
import { Job } from '../Card/Card';
import OpeningContent from '../OpeningContent/OpeningContent';
import CardArb from '../Card/CardArb';

function Search(){
  const [input, setInput] = useState('');
  const [submitValue, setSubmitValue] = useState('') ;
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(null)

  const inputValue = (input: React.ChangeEvent<HTMLInputElement>) => {
    return setInput(input.target.value)
  }

  useEffect(() => {  
    fetch('https://jobsearch.api.jobtechdev.se/search?q=' + submitValue)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.hits)
      return setJobs(data.hits)
    })
    .catch((err) =>{
      console.log(err)
      setError(err)
    })
  }, [submitValue])

  return (
    <>
      <OpeningContent />
      <form 
        tabIndex={0} 
        className='job-form' 
        onSubmit={(e) =>{
          e.preventDefault();
          setSubmitValue(input)
          return 
        }}>
        <div className="input-container">
          <button type='submit' className='search-btn'>
            <img src={searchIcon} alt="magnifying glass" />
          </button>
          <input
            className='search-input' 
            value={input}
            onChange={inputValue} type="text" 
            placeholder='Jobbtitel, nyckelord eller stad' 
            aria-label='Search bar for job ads'
          />
        </div>
      </form>
      {Array.isArray(jobs) && jobs.length !== 0 && <CardArb jobs={jobs}/>}
      {error && <div className='error-container'>
        <h1>{error}</h1>
      </div>}
    </>
  )
}

export default Search;