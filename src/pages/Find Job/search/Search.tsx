import './search.css';
import searchIcon from './assets/Search SVG Vector.svg';
import { useEffect } from 'react';
import OpeningContent from '../OpeningContent/OpeningContent';
import CardArb from '../Card/CardArb';

// redux 
import { useDispatch, useSelector } from 'react-redux';
import {input, submit, tag, fetchingJobData } from '../../../features/search/searchSlice';
import { setTextColorHeader } from '../../../features/background/backgroundSlice';
import { AppDispatch, RootState } from '../../../redux/store';
import LoadingScreen from '../LoadingScreen/LoadingScreen';


function Search(){
  const {inputValue, submitValue, error, jobs, isActive, isLoading} = useSelector((state: RootState) => state.search); 
  const {color} = useSelector((state: RootState) => state.background); 
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {  
    dispatch(setTextColorHeader('black')); 
    dispatch(fetchingJobData(submitValue))
    return 
  }, [submitValue])

  useEffect(() => {
    // Resets the inputfield every time the user re-enter this component. 
    dispatch(input('')); 
  }, [])

  function tagContent(element: React.MouseEvent<HTMLDivElement, MouseEvent>){
    const target = element.target as HTMLDivElement
    if(target.textContent) dispatch(tag(target.textContent))
  }

  return (
    <>
      <OpeningContent />
      <form 
        tabIndex={0} 
        className='job-form' 
        onSubmit={(e) =>{
          e.preventDefault();
          dispatch(submit())
          return 
        }}>
        <div className="input-container">
          <div className="label-for-input">
            <p>Sök på ett eller flera ord</p>
            <p>Skriv t.ex. utvecklare Stockholm</p>
          </div>
          <button type='submit' className='search-btn'>
            <img src={searchIcon} alt="magnifying glass" />
          </button>
          <input
            disabled={isLoading}
            className='search-input' 
            value={inputValue}
            onChange={(e) => dispatch(input(e.target.value))} type="text" 
            placeholder='Jobbtitel, nyckelord eller stad' 
            aria-label='Search bar for job ads'
          />
        </div>
        {/* <div className="tag-container">
          <div 
            onClick={tagContent} 
            className="tag">Stockholm</div>
          <div 
            onClick={tagContent} 
            className="tag">Jönköping</div>
          <div 
            onClick={tagContent} 
            className="tag">Göteborg</div>
        </div> */}
      </form>
      {isLoading && <LoadingScreen type='loadingCircle' />}
      {isActive && jobs.length !== 0 && <CardArb jobs={jobs}/>}
      {(isActive && jobs.length === 0) && <h1 className='no-jobs' style={{color: color}}>Inga jobb hittades som matchar din sökning.</h1> }
      {error && <div className='error-container'>
        <h1>{error}</h1>
      </div>}
    </>
  )
}

export default Search;