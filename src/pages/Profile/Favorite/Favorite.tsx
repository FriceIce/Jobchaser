import card from "../../Find Job/Card/modules/card";
import style from './Favorite.module.css'; 
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";


function Favorite(){
  const color = useSelector((state: RootState) => state.background.color); 
  const savedJobAds = useSelector((state: RootState) => state.user.savedJobAds); 
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