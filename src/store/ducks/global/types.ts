export enum GlobalTypes {
  VISIBLE_LEFT_SIDEBAR = '@global/VISIBLE_LEFT_SIDEBAR',
  VISIBLE_USER_SIDEBAR = '@global/VISIBLE_USER_SIDEBAR',
  THEME_MODE = '@global/THEME_MODE',
  PRIMARY_COLOR = '@global/PRIMARY_COLOR',
}

export enum ThemeColors {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IGlobal {
  primaryColor: string;
  themeMode: ThemeColors;
  viewLeftSidebar: boolean;
  viewUserSidebar: boolean;
}

export interface IViewLeftSidebar {
  type: GlobalTypes.VISIBLE_LEFT_SIDEBAR;
  viewLeftSidebar: boolean;
}

export interface IViewUserSidebar {
  type: GlobalTypes.VISIBLE_USER_SIDEBAR;
  viewUserSidebar: boolean;
}

export interface IThemeMode {
  type: GlobalTypes.THEME_MODE;
  themeMode: ThemeColors;
}

export interface IPrimaryColor {
  type: GlobalTypes.PRIMARY_COLOR;
  color: string;
}

export type GlobalAction =
  | IViewLeftSidebar
  | IViewUserSidebar
  | IThemeMode
  | IPrimaryColor;

export interface IGlobalState {
  readonly primaryColor: string;
  readonly themeMode: ThemeColors;
  readonly viewLeftSidebar: boolean;
  readonly viewUserSidebar: boolean;
}
