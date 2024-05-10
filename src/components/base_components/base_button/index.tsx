/* REACT */
import React from 'react';
import {TextProps, View} from 'react-native';

/* MODULES */

/* CUSTOM MODULES */
import {BaseText} from 'components/base_components/base_text';
import RNBounceable from 'components/hoc/rn_bouncable';

/** STYLE */
import {BLACK, WHITE} from 'styles/colors';
import {MS_16} from 'styles/mixins';
import {styles} from './style';

interface BaseButtonProps extends TextProps {
  btnText: string;
  onBtnClick?: () => void;
  height?: number;
  width?: number;
  disabled?: boolean; // pass, if button with border with no color inside, requried
  textColor?: string;
  fontSize?: number;
  bgColor?: string;
}

const BaseButtonView = ({
  ...props
}: React.PropsWithChildren<BaseButtonProps>) => {
  const style = styles(props.height ?? 0, props.width ?? 0, props.bgColor);
  return (
    <RNBounceable onPress={props.onBtnClick} style={style.container}>
      {props.disabled ? (
        <View style={style.btnStyleUnfilled}>
          <BaseText
            children={props.btnText}
            color={props.textColor ?? WHITE}
            textType={'bold'}
            fontSize={props.fontSize ?? MS_16}
          />
        </View>
      ) : (
        <View style={style.btnStyle}>
          <BaseText
            children={props.btnText}
            color={props?.textColor ?? BLACK}
            textType={'bold'}
            fontSize={props.fontSize ?? MS_16}
          />
        </View>
      )}
    </RNBounceable>
  );
};

export const BaseButton = React.memo(BaseButtonView);
