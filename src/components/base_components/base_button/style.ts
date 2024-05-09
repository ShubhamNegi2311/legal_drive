/* REACT */
import { StyleSheet } from 'react-native';

/** CUSTOM MODULE */
import { ButtonColor } from 'styles/colors';
import {
  BUTTON_BORDER_RADIUS,
  BUTTON_HEIGHT,
  BUTTON_WIDTH
} from 'styles/common';

export const styles = (height: number, width: number, bgColor?: string) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      width: width > 0 ? width : '100%',
      alignSelf: 'center'
    },
    btnStyle: {
      width: width > 0 ? width : BUTTON_WIDTH,
      height: height > 0 ? height : BUTTON_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor ?? ButtonColor.PRIMARY,
      borderRadius: BUTTON_BORDER_RADIUS
    },
    btnStyleUnfilled: {
      width: width > 0 ? width : BUTTON_WIDTH,
      height: height > 0 ? height : BUTTON_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor ?? ButtonColor.PRIMARY_DISABLED,
      borderRadius: BUTTON_BORDER_RADIUS
    }
  });
