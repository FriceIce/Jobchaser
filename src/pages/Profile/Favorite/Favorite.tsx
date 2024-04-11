// @ts-nocheck
import card from "../../Find Job/Card/modules/card";
import style from './Favorite.module.css'; 
import { useSelector } from "react-redux";


function Favorite(){
  const color = useSelector(state => state.background.color); 
  const savedJobAds = useSelector(state => state.user.savedJobAds); 
  return (
    <>
      <h1 className={style.titleForSavedJobs} style={{color: color}}>Sparade jobbannonser</h1>
      <div className="card-container">
        <ul className='card-layout'>
          {savedJobAds.map(cardObj => card(cardObj))}
        </ul>
      </div>
    </>
  )
}

export default Favorite;