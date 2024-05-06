import {StyleSheet} from 'react-native';
import {Colors, WHITE} from '../../styling/colors';
import {
  HS_20,
  VS_20,
  VS_50,
  MS_20,
  HS_10,
  HS_15,
  VS_5,
  VS_30,
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
    justifyContent: 'center',
    position: 'relative',
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
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: HS_10,
    paddingHorizontal: HS_15,
    paddingVertical: VS_5,
    position: 'relative',
    bottom: VS_30,
    backgroundColor: WHITE,
    alignSelf: 'center',
    width: '90%',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: HS_10,
  },
  arrowIcon: {
    position: 'absolute',
    left: HS_20,
    top: VS_20,
    alignSelf: 'center',
  },
  itemContainer: {
    backgroundColor: 'blue',
    padding: HS_15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: HS_10,
  },
});
