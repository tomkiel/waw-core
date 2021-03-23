import { put, PutEffect } from 'redux-saga/effects';
import {
  viewLeftSidebarAction,
  viewUserSidebarAction,
  themeModeAction,
  primaryColorAction,
} from './actions';
import {
  IPrimaryColor,
  IThemeMode,
  IViewLeftSidebar,
  IViewUserSidebar,
  ThemeColors,
} from './types';

export function* changeViewLeftSidebar(viewLeftSidebar: boolean): Generator<
  PutEffect<IViewLeftSidebar>,
  void,
  unknown> {
  yield put(viewLeftSidebarAction(viewLeftSidebar));
}

export function* changeViewUserSidebar(viewUserSidebar: boolean): Generator<
  PutEffect<IViewUserSidebar>,
  void,
  unknown> {
  yield put(viewUserSidebarAction(viewUserSidebar));
}

export function* changeThemeMode(theme: ThemeColors): Generator<
  PutEffect<IThemeMode>,
  void,
  unknown> {
  yield put(themeModeAction(theme));
}

export function* changePrimaryColor(color: string): Generator<
  PutEffect<IPrimaryColor>,
  void,
  unknown> {
  yield put(primaryColorAction(color));
}
