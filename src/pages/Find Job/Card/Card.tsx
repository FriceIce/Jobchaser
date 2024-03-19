import { ReactNode } from 'react';
import './card.css';

export type Jobs = {
  jobs: Job[]; 
}

export type Job = {
  id: string; 
  company: string;
  logo: string; 
  jobTitle: string; 
  responsibility: string;
  experienceLevel: string; 
  jobdescription: string;
  postedDate: string; 
  employmentType:string;
  workLocation: string; 
  programmingLanguages: frameworkAndLang[]; 
  frameworks: frameworkAndLang[]; 
}

type frameworkAndLang = {
  value: string;
  label: string; 
  id: string;
}

function Card({jobs}: Jobs){
  console.log(jobs, '23')

  // Renderar innehåll från tools samt sköter stylingen. 
  const displaySubArray = (arr: frameworkAndLang[]): ReactNode =>  {
    return (
      <>
        {arr.map(obj => <li key={obj.id}>#{obj.value}</li>)}
      </>
    )
  }

  const checkingForValue = (value: string | undefined): ReactNode => {
    if(!value) return false;
    if(value) {
      return (
      <li><p>#{value}</p></li>
      )
    }; 
  }
  
  return(

    <ul className='card-layout'>
    {jobs.map((jobObj) => { 
      const imagePath = jobObj.logo.includes('./images/') ? './assets' + jobObj.logo.substring(8) : jobObj.logo; 
      
      return (
      <li key={jobObj.id} className='card' tabIndex={0} aria-label={`Job ad for ${jobObj.company}`}>
        <div className="job-log-container">
          <img src={imagePath} alt="Job logo" />
        </div>
        <article className='job-info-container'>
          <div className='title-subtitle-description-container'>
            <h1>{jobObj.company}</h1> <h2>{jobObj.jobTitle}</h2>

            <p className='job-description'>{jobObj.jobdescription}</p>
          </div>
          <ul className='info'>
            {jobObj. programmingLanguages && displaySubArray(jobObj.programmingLanguages)}
            {jobObj.frameworks && displaySubArray(jobObj.frameworks)}
            {checkingForValue(jobObj.responsibility)}
            {checkingForValue(jobObj.experienceLevel)}
            {checkingForValue(jobObj.employmentType)}
            {checkingForValue(jobObj.workLocation)}
          </ul>
        </article>
        <p className='date'>Posted: {jobObj.postedDate || 'Unkown'}</p>
      </li>
      )})
    }
    </ul>
  )
}

export default Card;