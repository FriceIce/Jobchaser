// @ts-nocheck
import './search.css';
import searchIcon from './assets/Search SVG Vector.svg';
import { useEffect, useState, useContext } from 'react';
import { Context } from '../../../App';
import { Job } from '../Card/Card';
import OpeningContent from '../OpeningContent/OpeningContent';
import CardArb from '../Card/CardArb';

function Search(){
  const [input, setInput] = useState('');
  const [submitValue, setSubmitValue] = useState('') ;
  const [error, setError] = useState(null)

  const {setTextColorHeader, setSavedJobAds, savedJobAds, setJobs, jobs} = useContext(Context);
  setTextColorHeader('black'); 

  const inputValue = (input: React.ChangeEvent<HTMLInputElement>) => {
    return setInput(input.target.value)
  }

  useEffect(() => {  
    fetch('https://jobsearch.api.jobtechdev.se/search?q=' + submitValue)
    .then((res) => res.json())
    .then((data) => {
      
      const editedData = data.hits.map((job) => {
        const message = 'Information saknas';
        if(job.duration.label === null) job.duration.label = message;
        if(job.working_hours_type.label === null) job.working_hours_type.label = message;
        if(job.employment_type.label === null) job.employment_type.label = message;
        return job;
      });

      // console.log(editedData)
      setJobs(editedData)
      return
    })
    .catch((err) =>{
      console.log(err)
      setError(err)
      
    })

    return 
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
          <div className="label-for-input">
            <p>Sök på ett eller flera ord</p>
            <p>Skriv t.ex. utvecklare Stockholm</p>
          </div>
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