import { Reducer } from 'redux';
import {
  GlobalAction,
  GlobalTypes,
  IGlobalState,
  ThemeColors,
} from './types';

const INITIAL_STATE: IGlobalState = {
  viewLeftSidebar: false,
  viewUserSidebar: false,
  themeMode: ThemeColors.LIGHT,
  primaryColor: 'primary',
};

const reducer: Reducer<IGlobalState, GlobalAction> = (
  state = INITIAL_STATE, action: GlobalAction,
) => {
  switch (action.type) {
    case GlobalTypes.VISIBLE_LEFT_SIDEBAR:
      return {
        ...state,
        viewLeftSidebar: action.viewLeftSidebar,
      };
    case GlobalTypes.VISIBLE_USER_SIDEBAR:
      return {
        ...state,
        viewUserSidebar: action.viewUserSidebar,
      };
    case GlobalTypes.THEME_MODE:
      return {
        ...state,
        themeMode: action.themeMode,
      };
    case GlobalTypes.PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color,
      };
    default:
      return state;
  }
};

export default reducer;
