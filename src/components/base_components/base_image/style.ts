import {StyleSheet} from 'react-native';

export const style = (height: number, width: number, borderRadius: number) =>
  StyleSheet.create({
    mainContainer: {
      width: width,
      height: height,
      borderRadius: borderRadius ?? 0,
    },
  });
