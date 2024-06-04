import {StyleSheet} from 'react-native';
import {BACKGROUND, BLACK, PRIMARY, WHITE} from 'styles/colors';
import {HS_10, HS_20, HS_40, HS_5, MS_1, VS_20, VS_8} from 'styles/mixins';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: BACKGROUND,
    height: '100%',
    width: '100%',
  },
  upperContainer: {
    height: '55%',
  },
  lowerContainer: {
    height: '45%',
    backgroundColor: WHITE,
    borderTopLeftRadius: HS_40,
    borderTopRightRadius: HS_40,
    paddingVertical: VS_20,
    paddingHorizontal: HS_20,
  },
  selectedCountryTextStyle: {
    paddingLeft: HS_5,
    color: BLACK,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  countryNameTextStyle: {
    paddingLeft: HS_10,
    color: BLACK,
    textAlign: 'right',
  },
  searchBarStyle: {
    flex: 1,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  countryPicker: {
    borderWidth: MS_1,
    borderColor: PRIMARY,
    paddingVertical: VS_8,
    width: '25%',
    borderRadius: HS_5,
  },
  countryFlagStyle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  numberInput: {
    width: '70%',
  },
});
