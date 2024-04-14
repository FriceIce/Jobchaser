// @ts-nocheck
import favoriteRegular from '../assets/favorite-regular.svg'
import favoriteSolid from '../assets/favorite-solid.svg'
import { updateSavedJobs } from '../../../../../database/firebase';
import { useState, useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { jobListing, saveJobAd } from '../../../../features/user/userSlice';

function SavedJobAd({style, jobObj}){
  // Redux
  const {savedJobAds, isOnline} = useSelector((state) => state.user);
  const dispatch = useDispatch(); 

  // useState
  const [saveAdBtn, setSaveAdBtn] = useState(null); 
  const [allReadySaved, setAllReadySaved] = useState(null); 

  
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

  function updateOrDeleteSavedAd(button){
    if(button === true){
      dispatch(saveJobAd(jobObj));

    } else if(button === false && savedJobAds.length !== 0) {
      const filteredList = savedJobAds.map(job => {
        if(job.id === jobObj.id) return null;
        if(job.id !== jobObj.id) return job; 
      })

      dispatch(jobListing(filteredList.filter(job => job !== null)));
      updateSavedJobs(filteredList, isOnline.userId)
    }
  }

  useEffect(() => {
    if(isOnline) updateSavedJobs(savedJobAds, isOnline.userId);
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