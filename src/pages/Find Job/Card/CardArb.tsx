import { Card } from '../../../features/search/cardType'
import './cardArb.css'
import card from '../../../modules/card'

const CardArb = ({jobs}: {jobs: Card[]}) => {  
  return (
    <div className="card-container">
      <ul className='card-layout'>
        {jobs.map(cardObj => card(cardObj))}
      </ul>
    </div>
  )
}

export default CardArb; 


