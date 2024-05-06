import {StyleSheet} from 'react-native';
import {Colors, WHITE} from '../../styling/colors';
import {
  HS_10,
  HS_15,
  HS_20,
  MS_20,
  VS_20,
  VS_30,
  VS_5,
  VS_50,
} from '../../styling/mixins';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  upperContainer: {
    flexDirection: 'row',
    paddingHorizontal: HS_20,
    backgroundColor: Colors.primary,
    paddingTop: VS_20,
    paddingBottom: VS_50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lowerContainer: {
    backgroundColor: Colors.background,
    paddingHorizontal: HS_20,
  },
  searchInput: {
    backgroundColor: WHITE,
    // padding: HS_15,
    fontSize: MS_20,
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: HS_10,
    paddingHorizontal: HS_15,
    paddingVertical: VS_5,
    position: 'relative',
    bottom: VS_30,
    backgroundColor: WHITE,
    width: '90%',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: HS_10,
  },
});
