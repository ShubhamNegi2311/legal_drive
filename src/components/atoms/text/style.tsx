/* REACT */
import {StyleSheet} from 'react-native';
import {moderateScale} from 'styles/mixins';

/** CUSTOM MODULE */

export const styles = (color: string, fontSize: number) =>
  StyleSheet.create({
    text: {
      // fontFamily: FONT_FAMILY_REGULAR,
      fontSize: moderateScale(fontSize),
      color: color,
    },
    textBold: {
      // fontFamily: FONT_FAMILY_BOLD,
      fontSize: moderateScale(fontSize),
      color: color,
    },
    textMedium: {
      // fontFamily: FONT_FAMILY_MEDIUM,
      fontSize: moderateScale(fontSize),
      color: color,
    },
    textLight: {
      // fontFamily: FONT_FAMILY_LIGHT,
      fontSize: moderateScale(fontSize),
      color: color,
    },
    textSemiBold: {
      // fontFamily: FONT_FAMILY_SEMI_BOLD,
      fontSize: moderateScale(fontSize),
      color: color,
    },
  });
