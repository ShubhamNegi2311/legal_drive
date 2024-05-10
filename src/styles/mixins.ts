/* REACT */
import {Dimensions} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

/** Default guideline sizes are based on standard ~6 + inches" screen mobile device. */
const guidelineBaseWidth = 400;
const guidelineBaseHeight = 850;

// USES: width, marginLeft, marginRight, marginHorizontal,
// paddingLeft, paddingRight, paddingHorizontal, likewise.
const horizontalScale = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

// USES: height, marginTop, marginBotton, margin Vertical,
// line-height, paddingTop, paddingBotton, padding Vertical, likewise.
const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;

// USES: font-size, borderRadius, likewise.
const moderateScale = (size: number, factor = 0.5) => {
  const value = horizontalScale(1);
  if (value > 1.25) {
    factor = 0;
  } else if (value < 1.25 && value >= 1.2) {
    factor = 0.1;
  } else if (value < 1.15 && value >= 1.1) {
    factor = 0.2;
  } else if (value < 1.1 && value >= 1.05) {
    factor = 0.3;
  } else if (value > 0.85 && value <= 0.9) {
    factor = 0.85;
  } else if (value > 0.8 && value <= 0.85) {
    factor = 1;
  } else if (value > 0.75 && value <= 0.8) {
    factor = 1.2;
  } else if (value < 0.75) {
    factor = 1.3;
  }
  return size + (horizontalScale(size) - size) * factor;
};

export {horizontalScale, moderateScale, verticalScale};

// horizontal scale pre defined values to reduce calculations at view reendering time.
export const HS_1 = horizontalScale(1);
export const HS_2 = horizontalScale(2);
export const HS_3 = horizontalScale(3);
export const HS_4 = horizontalScale(4);
export const HS_5 = horizontalScale(5);
export const HS_6 = horizontalScale(6);
export const HS_7 = horizontalScale(7);
export const HS_8 = horizontalScale(8);
export const HS_9 = horizontalScale(9);
export const HS_10 = horizontalScale(10);
export const HS_11 = horizontalScale(11);
export const HS_12 = horizontalScale(12);
export const HS_13 = horizontalScale(13);
export const HS_14 = horizontalScale(14);
export const HS_15 = horizontalScale(15);
export const HS_16 = horizontalScale(16);
export const HS_17 = horizontalScale(17);
export const HS_18 = horizontalScale(18);
export const HS_19 = horizontalScale(19);
export const HS_20 = horizontalScale(20);
export const HS_21 = horizontalScale(21);
export const HS_22 = horizontalScale(22);
export const HS_23 = horizontalScale(23);
export const HS_24 = horizontalScale(24);
export const HS_25 = horizontalScale(25);
export const HS_26 = horizontalScale(26);
export const HS_27 = horizontalScale(27);
export const HS_28 = horizontalScale(28);
export const HS_29 = horizontalScale(29);
export const HS_30 = horizontalScale(30);
export const HS_31 = horizontalScale(31);
export const HS_32 = horizontalScale(32);
export const HS_33 = horizontalScale(33);
export const HS_34 = horizontalScale(34);
export const HS_35 = horizontalScale(35);
export const HS_36 = horizontalScale(36);
export const HS_37 = horizontalScale(37);
export const HS_38 = horizontalScale(38);
export const HS_39 = horizontalScale(39);
export const HS_40 = horizontalScale(40);
export const HS_41 = horizontalScale(41);
export const HS_42 = horizontalScale(42);
export const HS_43 = horizontalScale(43);
export const HS_44 = horizontalScale(44);
export const HS_45 = horizontalScale(45);
export const HS_46 = horizontalScale(46);
export const HS_47 = horizontalScale(47);
export const HS_48 = horizontalScale(48);
export const HS_49 = horizontalScale(49);
export const HS_50 = horizontalScale(50);
export const HS_52 = horizontalScale(52);
export const HS_54 = horizontalScale(54);
export const HS_56 = horizontalScale(56);
export const HS_58 = horizontalScale(58);
export const HS_60 = horizontalScale(60);
export const HS_62 = horizontalScale(62);
export const HS_64 = horizontalScale(64);
export const HS_66 = horizontalScale(66);
export const HS_68 = horizontalScale(68);
export const HS_70 = horizontalScale(70);
export const HS_75 = horizontalScale(75);
export const HS_80 = horizontalScale(80);
export const HS_85 = horizontalScale(85);
export const HS_90 = horizontalScale(90);
export const HS_100 = horizontalScale(100);
export const HS_112 = horizontalScale(112);
export const HS_120 = horizontalScale(120);
export const HS_125 = horizontalScale(125);
export const HS_130 = horizontalScale(130);
export const HS_140 = horizontalScale(140);
export const HS_170 = horizontalScale(170);
export const HS_150 = horizontalScale(150);
export const HS_200 = horizontalScale(200);
export const HS_230 = horizontalScale(230);

// vertical scale pre defined values to reduce calculations at view reendering time.
export const VS_1 = verticalScale(1);
export const VS_2 = verticalScale(2);
export const VS_3 = verticalScale(3);
export const VS_4 = verticalScale(4);
export const VS_5 = verticalScale(5);
export const VS_6 = verticalScale(6);
export const VS_7 = verticalScale(7);
export const VS_8 = verticalScale(8);
export const VS_9 = verticalScale(9);
export const VS_10 = verticalScale(10);
export const VS_11 = verticalScale(11);
export const VS_12 = verticalScale(12);
export const VS_13 = verticalScale(13);
export const VS_14 = verticalScale(14);
export const VS_15 = verticalScale(15);
export const VS_16 = verticalScale(16);
export const VS_17 = verticalScale(17);
export const VS_18 = verticalScale(18);
export const VS_19 = verticalScale(19);
export const VS_20 = verticalScale(20);
export const VS_21 = verticalScale(21);
export const VS_22 = verticalScale(22);
export const VS_23 = verticalScale(23);
export const VS_24 = verticalScale(24);
export const VS_25 = verticalScale(25);
export const VS_26 = verticalScale(26);
export const VS_27 = verticalScale(27);
export const VS_28 = verticalScale(28);
export const VS_29 = verticalScale(29);
export const VS_30 = verticalScale(30);
export const VS_31 = verticalScale(31);
export const VS_32 = verticalScale(32);
export const VS_33 = verticalScale(33);
export const VS_34 = verticalScale(34);
export const VS_35 = verticalScale(35);
export const VS_36 = verticalScale(36);
export const VS_37 = verticalScale(37);
export const VS_38 = verticalScale(38);
export const VS_39 = verticalScale(39);
export const VS_40 = verticalScale(40);
export const VS_41 = verticalScale(41);
export const VS_42 = verticalScale(42);
export const VS_43 = verticalScale(43);
export const VS_44 = verticalScale(44);
export const VS_45 = verticalScale(45);
export const VS_46 = verticalScale(46);
export const VS_47 = verticalScale(47);
export const VS_48 = verticalScale(48);
export const VS_49 = verticalScale(49);
export const VS_50 = verticalScale(50);
export const VS_52 = verticalScale(52);
export const VS_54 = verticalScale(54);
export const VS_55 = verticalScale(55);
export const VS_56 = verticalScale(56);
export const VS_58 = verticalScale(58);
export const VS_60 = verticalScale(60);
export const VS_62 = verticalScale(62);
export const VS_64 = verticalScale(64);
export const VS_65 = verticalScale(65);
export const VS_66 = verticalScale(66);
export const VS_68 = verticalScale(68);
export const VS_70 = verticalScale(70);
export const VS_75 = verticalScale(75);
export const VS_80 = verticalScale(80);
export const VS_85 = verticalScale(85);
export const VS_90 = verticalScale(90);
export const VS_100 = verticalScale(100);
export const VS_110 = verticalScale(110);
export const VS_120 = verticalScale(120);
export const VS_125 = verticalScale(125);
export const VS_135 = verticalScale(135);
export const VS_140 = verticalScale(140);
export const VS_150 = verticalScale(150);
export const VS_160 = verticalScale(160);
export const VS_170 = verticalScale(170);
export const VS_180 = verticalScale(180);
export const VS_200 = verticalScale(200);
export const VS_210 = verticalScale(210);
export const VS_220 = verticalScale(220);
export const VS_250 = verticalScale(250);
export const VS_285 = verticalScale(285);

// moderate scale pre defined values to reduce calculations at view reendering time.
export const MS_1 = moderateScale(1);
export const MS_2 = moderateScale(2);
export const MS_3 = moderateScale(3);
export const MS_4 = moderateScale(4);
export const MS_5 = moderateScale(5);
export const MS_6 = moderateScale(6);
export const MS_7 = moderateScale(7);
export const MS_8 = moderateScale(8);
export const MS_9 = moderateScale(9);
export const MS_10 = moderateScale(10);
export const MS_11 = moderateScale(11);
export const MS_12 = moderateScale(12);
export const MS_13 = moderateScale(13);
export const MS_14 = moderateScale(14);
export const MS_15 = moderateScale(15);
export const MS_16 = moderateScale(16);
export const MS_17 = moderateScale(17);
export const MS_18 = moderateScale(18);
export const MS_19 = moderateScale(19);
export const MS_20 = moderateScale(20);
export const MS_21 = moderateScale(21);
export const MS_22 = moderateScale(22);
export const MS_23 = moderateScale(23);
export const MS_24 = moderateScale(24);
export const MS_25 = moderateScale(25);
export const MS_26 = moderateScale(26);
export const MS_27 = moderateScale(27);
export const MS_28 = moderateScale(28);
export const MS_29 = moderateScale(29);
export const MS_30 = moderateScale(30);
export const MS_31 = moderateScale(31);
export const MS_32 = moderateScale(32);
export const MS_33 = moderateScale(33);
export const MS_34 = moderateScale(34);
export const MS_35 = moderateScale(35);
export const MS_36 = moderateScale(36);
export const MS_37 = moderateScale(37);
export const MS_38 = moderateScale(38);
export const MS_39 = moderateScale(39);
export const MS_40 = moderateScale(40);
export const MS_41 = moderateScale(41);
export const MS_42 = moderateScale(42);
export const MS_43 = moderateScale(43);
export const MS_44 = moderateScale(44);
export const MS_45 = moderateScale(45);
export const MS_46 = moderateScale(46);
export const MS_47 = moderateScale(47);
export const MS_48 = moderateScale(48);
export const MS_49 = moderateScale(49);
export const MS_50 = moderateScale(50);
export const MS_52 = moderateScale(52);
export const MS_54 = moderateScale(54);
export const MS_56 = moderateScale(56);
export const MS_58 = moderateScale(58);
export const MS_60 = moderateScale(60);
export const MS_62 = moderateScale(62);
export const MS_64 = moderateScale(64);
export const MS_66 = moderateScale(66);
export const MS_68 = moderateScale(68);
export const MS_70 = moderateScale(70);
export const MS_80 = moderateScale(80);
export const MS_90 = moderateScale(90);
export const MS_100 = moderateScale(100);
