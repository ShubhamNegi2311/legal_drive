/** REACT */
import {StyleSheet} from 'react-native';

export const style = (height: number | string, width: number | string) =>
  StyleSheet.create({
    container: {
      height: height,
      width: width,
    },
  });

export default style;
