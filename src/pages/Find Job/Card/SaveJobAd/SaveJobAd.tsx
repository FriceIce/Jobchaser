import favoriteRegular from '../assets/favorite-regular.svg'
import favoriteSolid from '../assets/favorite-solid.svg'
import { updateSavedJobs } from '../../../../../database/firebase';
import { useState, useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { jobListing, saveJobAd } from '../../../../features/user/userSlice';
import { Card } from '../../../../features/search/cardType';
import { RootState } from '../../../../redux/store';

function SavedJobAd({style, jobObj}: {style: string; jobObj: Card}){
  // Redux
  const {savedJobAds, isOnline} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch(); 

  // useState
  const [saveAdBtn, setSaveAdBtn] = useState<null | boolean>(null); 
  const [allReadySaved, setAllReadySaved] = useState<null | boolean>(null); 

  
  useEffect(() => {
    const favoriteAdsIDs = savedJobAds.map(job => job.id); 
    if(favoriteAdsIDs.includes(jobObj.id) && saveAdBtn === null){
      // console.log('This ad is already saved: ',jobObj.id, favoriteAdsIDs);
      setAllReadySaved(true); 
      return
    } 
    updateOrDeleteSavedAd(saveAdBtn);
    return
  }, [saveAdBtn])

  function saveBtn(){
    if(allReadySaved){
      setSaveAdBtn(false);
      setAllReadySaved(null);
      return
    }

    if(isOnline) setSaveAdBtn((prev) => !prev); 
  }

  function updateOrDeleteSavedAd(button: boolean | null){
    if(button === true){
      dispatch(saveJobAd(jobObj));

    } else if(button === false && savedJobAds.length !== 0) {
      const filteredList = savedJobAds.map(job => {
        if(job.id === jobObj.id) return null;
        if(job.id !== jobObj.id) return job; 
      }) as Card[];

      dispatch(jobListing(filteredList.filter(job => job !== null)));
      if(isOnline) updateSavedJobs(filteredList, isOnline.userId)
    }
  }

  useEffect(() => {
    if(isOnline) updateSavedJobs(savedJobAds, isOnline.userId);
    if(isOnline === false){
      setSaveAdBtn(false);
      setAllReadySaved(false);
    } 
    return
  }, [savedJobAds])

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