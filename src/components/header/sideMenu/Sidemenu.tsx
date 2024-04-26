import { TOGGLE_MENU } from "../../../features/sidemenu/sidemenuSlicer";
import { useDispatch } from "react-redux";

type Prop = { 
  menuClass: null | string; 
  textColorHeader: string;
  checked: boolean,
  color: string;
}
export const transitionDelay = (menuClass: string | null) => {
  return !menuClass ? '0ms, 0ms, 0ms, 200ms' : undefined;
}
function SideMenu({ menuClass, textColorHeader, checked, color}: Prop): React.ReactElement {
  const dispatch = useDispatch(); 
  
  return (
    <div onClick={() => dispatch(TOGGLE_MENU())} className='menu'>
      <div style={{background: menuClass ? color : textColorHeader, transitionDelay: transitionDelay(menuClass)}} className="bar"></div>
      <input style={{background: menuClass ? color : textColorHeader, transitionDelay: transitionDelay(menuClass)}} checked={checked} type='checkbox' className="bar"/>
      <div style={{background: menuClass ? color : textColorHeader, transitionDelay: transitionDelay(menuClass)}} className="bar"></div>
      <p style={{color: menuClass ? color : textColorHeader, opacity: menuClass ? '0' : undefined}}>Menu</p>
    </div>
  )
}

export default SideMenu;
