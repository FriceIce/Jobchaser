import './search.css';
import searchIcon from './assets/Search SVG Vector.svg';
import Card from '../Card/Card';
import { useState } from 'react';
import useFetch from '../../../hook/useFetch';
import { Job } from '../Card/Card';

function Search(){
  const [input, setInput] = useState('')
  const {data, error} = useFetch('http://localhost:8000/jobs'); // terminal: json-server --watch public/data/programming-languages.json --port 8000 

  const inputValue = (input: React.ChangeEvent<HTMLInputElement>) => {
    return setInput(input.target.value)
  }
  
  function jobAdFilter(jobObj: Job, setInput: string){
    const input = setInput.toLocaleLowerCase();
    
    if(setInput === '') return jobObj;
    if(jobObj.company.toLocaleLowerCase().includes(input)) return jobObj; 
    if(jobObj.jobTitle.toLocaleLowerCase().includes(input)) return jobObj;
    if(jobObj.employmentType.toLocaleLowerCase().includes(input)) return jobObj; 
    if(jobObj.frameworks.join('').toLowerCase().includes(input)) return jobObj; // #tags
    if(jobObj.programmingLanguages.join('').toLowerCase().includes(input)) return jobObj; // #tags
  }

  return (
    <>
      <form 
        tabIndex={0} 
        className='job-form' 
        onSubmit={(e) => e.preventDefault()}
        >
        <div className="input-container">
          <button type='submit' className='search-btn'>
            <img src={searchIcon} alt="magnifying glass" />
          </button>
          <input
            className='search-input' 
            value={input}
            onChange={inputValue} type="text" 
            placeholder='Jobbtitel, nyckelord eller företag' 
            aria-label='Search bar for job ads'
          />
        </div>
      </form>
      {data && <Card jobs={data.filter((jobObj: Job) => jobAdFilter(jobObj, input)).reverse()} />}
      {error && <h1>{error}</h1>}
    </>
  )
}

export default Search;