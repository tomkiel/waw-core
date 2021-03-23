import {
  GlobalTypes,
  ThemeColors,
  IThemeMode,
  IViewLeftSidebar,
  IViewUserSidebar,
  IPrimaryColor,
} from './types';

export const viewLeftSidebarAction = (viewLeftSidebar: boolean): IViewLeftSidebar => ({
  type: GlobalTypes.VISIBLE_LEFT_SIDEBAR,
  viewLeftSidebar,
});

export const viewUserSidebarAction = (viewUserSidebar: boolean): IViewUserSidebar => ({
  type: GlobalTypes.VISIBLE_USER_SIDEBAR,
  viewUserSidebar,
});

export const themeModeAction = (themeMode: ThemeColors): IThemeMode => ({
  type: GlobalTypes.THEME_MODE,
  themeMode,
});

export const primaryColorAction = (color: string): IPrimaryColor => ({
  type: GlobalTypes.PRIMARY_COLOR,
  color,
});
