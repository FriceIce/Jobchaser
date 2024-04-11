import { TOGGLE_MENU } from "../../../features/sidemenu/sidemenuSlicer";
import { useDispatch } from "react-redux";

type Prop = { 
  menuClass: null | string; 
  textColorHeader: string;
  checked: boolean,
  color: string;
}

function SideMenu({ menuClass, textColorHeader, checked, color}: Prop): React.ReactElement {
  const dispatch = useDispatch(); 
  return (
    <div onClick={() => dispatch(TOGGLE_MENU())} className='menu'>
      <div style={{background: menuClass ? color : textColorHeader}} className="bar"></div>
      <input style={{background: menuClass ? color : textColorHeader}} checked={checked} type='checkbox' className="bar"/>
      <div style={{background: menuClass ? color : textColorHeader}} className="bar"></div>
      <p style={{color: menuClass ? color : textColorHeader}}>Menu</p>
    </div>
  )
}

export default SideMenu;
