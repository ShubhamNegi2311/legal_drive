import {StyleSheet} from 'react-native';
import {BACKGROUND, WHITE} from 'styles/colors';
import {HS_40, VS_20, HS_20} from 'styles/mixins';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: BACKGROUND,
    height: '100%',
    width: '100%',
  },
  upperContainer: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    height: '55%',
    backgroundColor: WHITE,
    borderTopLeftRadius: HS_40,
    borderTopRightRadius: HS_40,
    paddingVertical: VS_20,
    paddingHorizontal: HS_20,
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
