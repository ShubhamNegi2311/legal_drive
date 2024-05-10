/* REACT */
import React from 'react';
import {TextProps, TextStyle} from 'react-native';

/* MODULES */
import {Text} from 'react-native-paper';

/* STYLE */
import {TextColor} from 'styles/colors';
import {MS_16} from 'styles/mixins';
import {styles} from './style';

// By default text size, rest if size is passed, it will be used from there
const FONT_SIZE = MS_16;

interface BaseTextProps extends TextProps {
  textType?: 'regular' | 'bold' | 'medium';
  color?: string;
  fontSize?: number;
}

const BaseTextView = ({
  children,
  style,
  ...props
}: React.PropsWithChildren<BaseTextProps>) => {
  // Deconstruct props
  const {color, fontSize} = props;

  // Create style object and pass default color or from the props,if passed
  const newStyle = styles(color ?? TextColor.WHITE, fontSize ?? FONT_SIZE);

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
