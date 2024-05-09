import { StyleSheet } from 'react-native';
import { DIVIDER_COLOR } from 'styles/colors';
import { VS_1 } from 'styles/mixins';

export const style = (height?: number, width?: number, color?: string) =>
  StyleSheet.create({
    container: {
      height: height ?? VS_1,
      width: width ?? '100%',
      backgroundColor: color ?? DIVIDER_COLOR
    }
  });
