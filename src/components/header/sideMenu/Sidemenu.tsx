type Prop = { 
  toggleMenu: (element: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  menuClass: null | string; 
  textColorHeader: string;
  checked: boolean,
  color: string;
}

function SideMenu({toggleMenu, menuClass, textColorHeader, checked, color}: Prop) {
  return (
    <div onClick={toggleMenu} className='menu'>
      <div style={{background: menuClass ? color : textColorHeader}} className="bar"></div>
      <input style={{background: menuClass ? color : textColorHeader}} checked={checked} type='checkbox' className="bar"/>
      <div style={{background: menuClass ? color : textColorHeader}} className="bar"></div>
      <p style={{color: menuClass ? color : textColorHeader}}>Menu</p>
    </div>
  )
}

export default SideMenu;
