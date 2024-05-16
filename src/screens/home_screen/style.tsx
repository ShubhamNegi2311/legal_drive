import {StyleSheet} from 'react-native';
import {WHITE, BLACK, PRIMARY, BACKGROUND} from 'styles/colors';
import {
  HS_20,
  VS_20,
  VS_50,
  MS_20,
  HS_10,
  HS_15,
  VS_5,
  VS_30,
  VS_100,
  VS_10,
  VS_3,
  VS_15,
} from 'styles/mixins';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  upperContainer: {
    flexDirection: 'row',
    paddingHorizontal: HS_20,
    backgroundColor: PRIMARY,
    paddingTop: VS_20,
    paddingBottom: VS_50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lowerContainer: {
    backgroundColor: BACKGROUND,
    paddingHorizontal: HS_20,
    flex: 1,
  },
  searchInput: {
    backgroundColor: WHITE,
    fontSize: MS_20,
    flexGrow: 1,
    color: BLACK,
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'gray',
    borderRadius: HS_10,
    paddingHorizontal: HS_15,
    paddingVertical: VS_5,
    position: 'static',
    bottom: VS_30,
    backgroundColor: WHITE,
    width: '90%',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: HS_10,
    width: '20%',
  },
  Fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: PRIMARY,
    borderRadius: VS_100,
  },
  screenHeader: {
    flexDirection: 'row',
    gap: HS_20,
    flexShrink: 1,
    flexGrow: 1,
  },
  headerText: {
    flexGrow: 1,
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  hsBar: {
    width: '95%',
    height: VS_3,
    backgroundColor: BACKGROUND,
    alignSelf: 'center',
    marginVertical: VS_10,
  },
  taskContainer: {
    paddingHorizontal: HS_20,
    paddingVertical: VS_15,
  },
});
