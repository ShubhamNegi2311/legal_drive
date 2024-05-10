import {StyleSheet} from 'react-native';
import {BACKGROUND, WHITE} from 'styles/colors';
import {HS_40} from 'styles/mixins';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: BACKGROUND,
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
