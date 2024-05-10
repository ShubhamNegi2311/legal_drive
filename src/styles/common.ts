import {Platform} from 'react-native';
import {
  HS_50,
  MS_100,
  MS_12,
  MS_6,
  SCREEN_HEIGHT,
  VS_120,
  VS_5,
  VS_52,
  VS_90,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from './mixins';

export const BUTTON_BORDER_RADIUS = MS_100;
export const BORDER_RADIUS = MS_12;
export const CHECK_BOX_RADIUS = MS_6;
export const DRAWER_ITEM_HEIGHT = VS_52;
export const MNEMONIC_PHRASE_LENGTH = 12;
export const BUTTON_WIDTH = WINDOW_WIDTH * 0.9;
export const BUTTON_HEIGHT = SCREEN_HEIGHT * 0.055;
export const BOTTOM_SHEET_HEIGHT = WINDOW_HEIGHT * 0.9;
export const BOTTOM_TAB_BAR_HEIGHT = Platform.OS === 'ios' ? VS_120 : VS_90;

export const shadow = {
  // iOS
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  // Android
  elevation: 7,
};
export const bottomSheetDraggableIcon = {
  height: VS_5,
  width: HS_50,
};
