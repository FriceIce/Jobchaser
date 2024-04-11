// @ts-nocheck
import './search.css';
import searchIcon from './assets/Search SVG Vector.svg';
import { useEffect, useState, useContext } from 'react';
import OpeningContent from '../OpeningContent/OpeningContent';
import CardArb from '../Card/CardArb';

// redux 
import { useDispatch, useSelector } from 'react-redux';
import {input, submit, tag, fetchingJobData } from '../../../features/search/searchSlice';
import { setTextColorHeader } from '../../../features/background/backgroundSlice';


function Search(){
  const {inputValue, submitValue, error, jobs} = useSelector((state) => state.search); 
  const {textColorHeader} = useSelector((state) => state.background); 
  const dispatch = useDispatch();
  
  useEffect(() => {  
    dispatch(setTextColorHeader('black')); 
    dispatch(fetchingJobData(submitValue))
    return 
  }, [submitValue])

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
            className='search-input' 
            value={inputValue}
            onChange={(e) => dispatch(input(e.target.value))} type="text" 
            placeholder='Jobbtitel, nyckelord eller stad' 
            aria-label='Search bar for job ads'
          />
        </div>
        <div className="tag-container">
          <div 
            onClick={(element) => dispatch(tag(element.target.textContent))} 
            className="tag">Stockholm</div>
          <div 
            onClick={(element) => dispatch(tag(element.target.textContent))} 
            className="tag">Jönköping</div>
          <div 
            onClick={(element) => dispatch(tag(element.target.textContent))} 
            className="tag">Göteborg</div>
        </div>
      </form>
      {Array.isArray(jobs) && jobs.length !== 0 && <CardArb jobs={jobs}/>}
      {error && <div className='error-container'>
        <h1>{error}</h1>
      </div>}
    </>
  )
}

export default Search;