/* REACT */
import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

/** STYLE */
import {styles} from './style';
import {TextColor} from '../../../styling/colors';
import {MS_16} from '../../../styling/mixins';

// By default text size, rest if size is passed, it will be used from there
const FONT_SIZE = MS_16;

interface BaseTextProps extends TextProps {
  textType?: 'regular' | 'bold' | 'medium' | 'light' | 'semi-bold';
  color?: TextColor | string;
  fontSize?: number;
  // fontFamily?:"bold" | "semi_bold" | "regular"
}

const BaseTextView = ({
  children,
  style,
  ...props
}: React.PropsWithChildren<BaseTextProps>) => {
  // Deconstruct props
  const {color, fontSize} = props;

  // Create style object and pass default color or from the props,if passed
  const newStyle = styles(color ?? TextColor.BLACK, fontSize ?? FONT_SIZE);

  // Select style on props basis (regular|bold)
  let textStyle: TextStyle;
  switch (props.textType ?? 'regular') {
    case 'regular':
      textStyle = newStyle.text;
      break;
    case 'bold':
      textStyle = newStyle.textBold;
      break;
    case 'medium':
      textStyle = newStyle.textMedium;
      break;
    case 'light':
      textStyle = newStyle.textLight;
      break;
    case 'semi-bold':
      textStyle = newStyle.textSemiBold;
      break;
    default:
      textStyle = newStyle.text;
      break;
  }

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};
export const BaseText = React.memo(BaseTextView);
