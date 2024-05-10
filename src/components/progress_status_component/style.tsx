import {StyleSheet} from 'react-native';
import {PRIMARY, SECONDARY, WHITE} from 'styles/colors';
import {HS_10, HS_15, HS_35, HS_5, MS_15, VS_20, VS_40} from 'styles/mixins';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: WHITE,
    paddingHorizontal: HS_15,
    width: '100%',
    borderRadius: VS_20,
    paddingTop: VS_20,
  },
  headingBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customBar: {
    flexDirection: 'row',
    gap: HS_10,
  },
  monthContainer: {
    borderWidth: 1,
    borderColor: '#d1d1d3',
    borderRadius: MS_15,
    paddingHorizontal: HS_10,
    justifyContent: 'center',
  },
  dotIconContainer: {
    borderWidth: 1,
    borderColor: '#d1d1d3',
    flexShrink: 1,
    borderRadius: MS_15,
    padding: HS_5,
    justifyContent: 'center',
  },
  progressBarContainer: {
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 150,
  },
  progressBar: {
    position: 'absolute',
    top: VS_20,
    left: HS_35,
  },
  totalfilesContainer: {
    paddingTop: VS_20,
  },
  fileNumContainer: {
    alignItems: 'center',
  },
  fileNum: {
    fontWeight: '800',
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: VS_40,
  },
  lowerContainerRow: {
    flexDirection: 'row',
    gap: HS_5,
  },
  pendingLeftBar: {
    width: 5,
    height: 25,
    backgroundColor: PRIMARY,
    borderRadius: 10,
  },
  pendingRightBar: {
    width: 5,
    height: 25,
    backgroundColor: SECONDARY,
    borderRadius: 10,
  },
  rightPendingText: {
    textAlign: 'right',
  },
});
