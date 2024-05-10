/** REACT */
import React from 'react';

/* MODULES */

/** ICON MODULES */
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ioni from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {WHITE} from 'styles/colors';

/** CUSTOM MODULES */
import {moderateScale} from 'styles/mixins';

// Which Icon vector Library needs to be used
export enum Vector {
  MATERIAL,
  IONI,
  ENTYPO,
  FONTISTO,
  FONT_AWESOME,
  ANT,
  OCT,
}

type IconViewProps = {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  onIconClick?: () => void;
  icons?: Vector;
  suppressHighlighting?: boolean;
};

const IconView: React.FC<IconViewProps> = props => {
  const suppressHighlighting = props.suppressHighlighting ?? true;
  const name = props.iconName;
  const size = props.iconSize
    ? moderateScale(props.iconSize)
    : moderateScale(25);
  const color = props.iconColor ?? WHITE;
  switch (props.icons) {
    case Vector.ENTYPO:
      return (
        <Entypo
          name={name}
          color={color}
          size={size}
          suppressHighlighting={suppressHighlighting}
          onPress={props.onIconClick}
        />
      );

    case Vector.IONI:
      return (
        <Ioni
          name={name}
          color={color}
          size={size}
          suppressHighlighting={suppressHighlighting}
          onPress={props.onIconClick}
        />
      );

    case Vector.ANT:
      return (
        <AntIcon
          name={name}
          color={color}
          size={size}
          suppressHighlighting={suppressHighlighting}
          onPress={props.onIconClick}
        />
      );

    case Vector.FONTISTO:
      return (
        <Fontisto
          name={name}
          color={color}
          size={size}
          suppressHighlighting={suppressHighlighting}
          onPress={props.onIconClick}
        />
      );

    case Vector.FONT_AWESOME:
      return (
        <FontAwesome
          name={name}
          color={color}
          size={size}
          suppressHighlighting={suppressHighlighting}
          onPress={props.onIconClick}
        />
      );
    case Vector.OCT:
      return (
        <Octicons
          name={name}
          color={color}
          size={size}
          suppressHighlighting={suppressHighlighting}
          onPress={props.onIconClick}
        />
      );

    default:
      return (
        <MaterialCommunityIcons
          name={name}
          color={color}
          size={size}
          suppressHighlighting={suppressHighlighting}
          onPress={props.onIconClick}
        />
      );
  }
};

export default IconView;
