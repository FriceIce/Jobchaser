// @ts-nocheck
import logo from '../../../../public/assets/ArbetsförmedlingenLogo 1.svg'
import favoriteRegular from './assets/favorite-regular.svg'
import favoriteSolid from './assets/favorite-solid.svg'
import reserveImg from './assets/Jobchaser-log.svg'
import './cardArb.css'

const CardArb = ({jobs}) => {  
  return (

    <div className="card-container">
      <ul className='card-layout'>
        {jobs.map(cardObj => card(cardObj))}
      </ul>
    </div>
 
  )
}

export default CardArb; 


function card(cardObj){
  
  const {
    id,
    headline,
    duration: {label: duration},
    employer: {name: company},
    working_hours_type: {label: workingHours},
    employment_type: {label: employmentType},
    occupation: {label: position},
    workplace_address: {municipality},
    last_publication_date,
    webpage_url,
    logo_url
  } = cardObj; 

  return (
    <li key={id} className='card'>
      <img tabIndex={0} className='favorite-btn' src={favoriteRegular} alt="save to favorite button" />
      <div className='card-logo-container'>
        <img src={logo_url ? logo_url : reserveImg} alt={`Logo for ${company}`} />
      </div>
      <article className="information-container">
        <div className="card-title-container">
          <a style={{color: 'black'}} href={webpage_url}>
            <h2>{headline}</h2>
          </a>
        </div>
        <div className="details-container">
          <div className='upper-job-details'>
            <p>{company}</p>
            <p>Position: <span style={{fontWeight: '500'}}>{position}</span></p>
            <p>Kommun: <span style={{fontWeight: '500'}}>{municipality}</span></p>
          </div>

          <div className="lower-job-details">
            <p>Omfattning: {workingHours}</p>
            <p>Varaktighet: {duration}</p>
            <p>Anställningsform: {employmentType}</p>
          </div>
        </div>
      </article>
      <div className="footer">
        <a href={webpage_url}>
          <p style={{color:'#3E619F'}}>Besök webbplatsen</p>
        </a>

        <div>
          <p>Sista datum: </p>
          <p>{last_publication_date}</p>
        </div>
        
      </div>
    </li>
  )
}