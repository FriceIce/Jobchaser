// @ts-nocheck
import { useContext, useEffect } from "react";
import { Context } from "../../../App";
import CardArb from "../../Find Job/Card/CardArb";
import card from "../../Find Job/Card/modules/card";
import style from './Favorite.module.css'; 

// firebase
import { savedJobsObserver } from "../../../../database/firebase";

function Favorite(){
  const {savedJobAds, setSavedJobAds, isOnline, color} = useContext(Context);
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