// @ts-nocheck
import { useContext, useEffect, useState } from 'react';
import favoriteRegular from '../assets/favorite-regular.svg'
import favoriteSolid from '../assets/favorite-solid.svg'
import { Context } from '../../../../App';
import { updateSavedJobs } from '../../../../../database/firebase';
import SavedJobs from '../../../Profile/Favorite/Favorite';

function SavedJobAd({style, jobObj}){
  const [saveAdBtn, setSaveAdBtn] = useState(null); 
  const [allReadySaved, setAllReadySaved] = useState(null); 
  const {savedJobAds, setSavedJobAds, isOnline} = useContext(Context);

  
  useEffect(() => {
    const favoriteAdsIDs = savedJobAds.map(job => job.id); 
    if(favoriteAdsIDs.includes(jobObj.id) && saveAdBtn === null){
      console.log('This ad is already saved: ',jobObj.id, favoriteAdsIDs);
      setAllReadySaved(true); 
      return
    } 
    updateOrDeleteSavedAd(saveAdBtn);
    return
  }, [saveAdBtn])

  function saveBtn(element){
    const {src} = element.target; 
    
    if(allReadySaved){
      setSaveAdBtn(false);
      setAllReadySaved(null);
      return
    }

     if(isOnline) setSaveAdBtn((prev) => !prev); 
  }

  function updateOrDeleteSavedAd(button){
    if(button === true){
      jobObj.saved = true; 
      savedJobAds.push(jobObj)
      updateSavedJobs(savedJobAds, isOnline.userId)

    } else if(button === false && savedJobAds.length !== 0) {
      const filteredList = savedJobAds.map(job => {
        if(job.id === jobObj.id) return null;
        if(job.id !== jobObj.id) return job; 
      })

      setSavedJobAds(filteredList.filter(job => job !== null)); 
      updateSavedJobs(filteredList, isOnline.userId)
    }
  }

  return (
    <div className={style}>
      <img
        onClick={saveBtn}
        tabIndex={0}
        src={saveAdBtn || allReadySaved ? favoriteSolid : favoriteRegular} alt="save to favorite button" 
        />
      <p>{allReadySaved || saveAdBtn ? 'Sparad' : 'Spara'}</p>
    </div>
  )
}

export default SavedJobAd; 