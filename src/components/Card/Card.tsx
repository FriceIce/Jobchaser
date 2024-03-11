import { ReactNode } from 'react';
import './card.css';

export type Jobs = {
  jobs: Job[]; 
  input: string;
  // error: string; 
}

export type Job = {
  id: number; 
  company: string;
  logo: string; 
  position: string; 
  role: string;
  level: string; 
  postedAt: string; 
  contract:string;
  location: string; 
  languages: string[]; 
  tools: string[]; 
}

function Card({jobs, input}: Jobs){
  console.log(jobs, '23')

  // Renderar innehåll från tools samt sköter stylingen. 
  const displaySubArray = (arr: string[]): ReactNode =>  {
    const arrayLength = arr.length;
    if(arrayLength > 0){
      return (
        <li>{arr.map((value, index) => {
          if(index !== arrayLength - 1) 
            return <span key={index} style={{paddingRight: '1rem'}}>#{value}</span>
          return <span key={index}>#{value}</span>
        })}</li>
      )
    }
  }

  const checkingForValue = (value: string | undefined): ReactNode => {
    if(!value) return false;
    if(value) {
      return (
      <li><p>#{value}</p></li>
      )
    }; 
  }

  function jobAdFilter(jobObj: Job, setInput: string){
    const input = setInput.toLocaleLowerCase();
    if(setInput === '') return jobObj;
    if(jobObj.company.toLocaleLowerCase().includes(input)) return jobObj; 
    if(jobObj.position.toLocaleLowerCase().includes(input)) return jobObj;
    if(jobObj.contract.toLocaleLowerCase().includes(input)) return jobObj; 
    if(jobObj.tools.join('').toLowerCase().includes(input)) return jobObj; // #tags
    if(jobObj.languages.join('').toLowerCase().includes(input)) return jobObj; // #tags
  }
  
  return(

    <ul>
    {jobs.filter((jobObj) => jobAdFilter(jobObj, input)).map((jobObj) => { 
      const imagePath = './assets' + jobObj.logo.substring(8); 
      
      return (
      <li key={jobObj.id} className='card' tabIndex={0} aria-label={`Job ad for ${jobObj.company}`}>
        <div className="job-log-container">
          <img src={imagePath} alt="Job logo" />
        </div>
        <article className='job-info-container'>
          <div className='title-subtitle-description-container'>
            <h1>{jobObj.company}</h1> <h2>{jobObj.position}</h2>

            <p className='job-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam non tempora amet! Exercitationem mollitia laboriosam impedit eligendi! Numquam cupiditate repellendus a. Vel molestias, eveniet rerum voluptas inventore eius ea non.</p>
          </div>
          <ul className='info'>
            {jobObj.languages && displaySubArray(jobObj.languages)}
            {jobObj.tools && displaySubArray(jobObj.tools)}
            {checkingForValue(jobObj.role)}
            {checkingForValue(jobObj.level)}
            {checkingForValue(jobObj.contract)}
            {checkingForValue(jobObj.location)}
            {checkingForValue(jobObj.location)}
          </ul>
        </article>
        <p className='date'>Posted: {jobObj.postedAt}</p>
      </li>
      )})
    }
    </ul>
  )
}

export default Card;