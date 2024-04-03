// @ts-nocheck

export const INTIAL_STATE = {
  IsMobileScreen: false, 
  menuClass: null,
  checked: false,
  timeoutId: null, 
  styleTransition: 'none',
  marginBottom: 'none'
}

export const ACTION_TYPES = {
  IS_MOBILE: 'MOBILE_SCREEN', 
  MENU_CLASS: 'SIDE_MENU_IS_OPEN',
  CHECKED: 'SIDE_MENU_IS_CLICKED',
  TIMEOUT_ID: 'SET_TIMEOUT', 
  STYLE_TRANSITION: 'STYLE_TRANSITION',
  STYLE_BOTTOM: 'STYLE_BOTTOM'
}

export function sideMenuReducer(state, action){
  switch (action.type) {
    case ACTION_TYPES.IS_MOBILE:
      return {
        ...state, 
        isMobileScreen: action.payload
      }
      
    case ACTION_TYPES.MENU_CLASS: 
      return {
        ...state,
        menuClass: action.payload
      }

    case ACTION_TYPES.CHECKED: 
      return {
        ...state,
        checked: action.payload
      }

    case ACTION_TYPES.TIMEOUT_ID: 
      return {
        ...state,
        timeoutId: action.payload
      }

    case ACTION_TYPES.STYLE_TRANSITION: 
      return {
        ...state,
        styleTransition: action.payload
      }

    case ACTION_TYPES.STYLE_TRANSITION: 
      return {
        ...state,
        styleTranistion: action.payload
      }

    default:
      console.error('ERROR');
      break;
  }
}