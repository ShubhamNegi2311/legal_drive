import {StyleSheet} from 'react-native';
import {Colors, WHITE} from '../../styling/colors';
import {HS_40} from '../../styling/mixins';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.background,
  },
  upperContainer: {
    height: '55%',
  },
  lowerContainer: {
    height: '45%',
    backgroundColor: WHITE,
    borderTopLeftRadius: HS_40,
    borderTopRightRadius: HS_40,
  },
});
