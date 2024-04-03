import { Link } from 'react-router-dom';

// icons
import whiteChevron from '../assets/chevron-right-white.svg'
import blackChevron from '../assets/chevron-right-black.svg'
import { useEffect, useState } from 'react';

type Prop = {
  label: string
  color: string;
  className: string;
  textColorHeader: string; 
  isMobileScreen: boolean;
  isDarkTheme: boolean;
}

function HeaderOption({label, className, isMobileScreen, color, textColorHeader, isDarkTheme}: Prop) {
  const [path, setPath] = useState('')
  
  useEffect(() => {
    if(label.toLocaleLowerCase() === 'hem') setPath('/Jobchaser/'); 
    if(label.toLocaleLowerCase() === 'lediga jobb') setPath('/Jobchaser/Find-job'); 
    if(label.toLocaleLowerCase() === 'logga in') setPath('/Jobchaser/Sign-in');
  }, [])

  return (
    <Link style={{color: isMobileScreen ? color : textColorHeader}} to={path}>
      {label}
      {isMobileScreen && <img className={className} src={!isDarkTheme ? blackChevron : whiteChevron} alt="chevron icon" />}
    </Link>

  )
}

export default HeaderOption;
