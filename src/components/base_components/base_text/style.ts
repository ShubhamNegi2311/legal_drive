/* REACT */
import { Platform, StyleSheet } from 'react-native';

/* STYLE */
import { moderateScale } from 'styles/mixins';
import { FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR } from 'styles/typography';

export const styles = (color: string, fontSize: number) =>
  StyleSheet.create({
    text: {
      fontFamily: FONT_FAMILY_REGULAR,
      fontSize: moderateScale(fontSize),
      color: color
    },
    textBold: {
      fontFamily:
        Platform.OS === 'ios' ? FONT_FAMILY_REGULAR : FONT_FAMILY_BOLD,
      fontSize: moderateScale(fontSize),
      fontWeight: Platform.OS === 'ios' ? '700' : '100',
      color: color
    },
    textMedium: {
      fontFamily: FONT_FAMILY_REGULAR,
      fontSize: moderateScale(fontSize),
      fontWeight: '500',
      color: color
    }
  });
