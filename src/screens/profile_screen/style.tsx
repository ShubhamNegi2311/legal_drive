import {StyleSheet} from 'react-native';
import {PRIMARY, BACKGROUND} from 'styles/colors';
import {HS_20, VS_20, VS_40, VS_50, VS_70} from 'styles/mixins';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  upperContainer: {
    flexDirection: 'row',
    paddingHorizontal: HS_20,
    backgroundColor: PRIMARY,
    paddingTop: VS_40,
    paddingBottom: VS_50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  lowerContainer: {
    backgroundColor: BACKGROUND,
    flex: 1,
    position: 'relative',
  },
  arrowIcon: {
    position: 'absolute',
    left: HS_20,
    top: VS_40,
    alignSelf: 'center',
  },
});
