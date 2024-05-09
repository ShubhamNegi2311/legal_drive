/* REACT */
import React from 'react';
import { KeyboardTypeOptions, View } from 'react-native';

/* MODULES */
import { TextInput, TextInputProps } from 'react-native-paper';

/* CUSTOM MODULES */
import SpaceView from 'components/atoms/space_view';
import { BaseText } from 'components/base_components/base_text';
import { BUTTON_HEIGHT, BUTTON_WIDTH } from 'styles/common';

/* STYLE */
import { BLACK, BorderColor, TextColor } from 'styles/colors';
import {
  HS_10,
  MS_1,
  MS_100,
  MS_12,
  MS_14,
  VS_10,
  VS_2,
  VS_5
} from 'styles/mixins';
import style from './style';

interface BaseTextFieldProps extends TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
  onFocus?: () => void;
  onSubmitEditing?: () => void;
  label?: string;
  secureTextEntry?: boolean;
  right?: React.ReactNode;
  left?: React.ReactNode;
  multiLine?: boolean;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  height?: number;
  bgColor?: string;
  width?: number;
  numberOfLines?: number;
  showValidation?: boolean;
  validationText?: string;
  fontSize?: number;
  disabled?: boolean;
  placeholder?: string;
  textColor?: string;
  outlineColor?: string;
  showLabel?: boolean;
  borderRadius?: number;
}

export type TextFieldType = {
  value: string;
  focus: boolean;
  errorMsg: string;
  isValidated: boolean;
};

const BaseTextFieldView = (props: BaseTextFieldProps) => {
  return (
    <View>
      {props?.showLabel ?? true ? (
        <BaseText style={style.mainContainer}>{props.label}</BaseText>
      ) : (
        false
      )}
      <TextInput
        outlineColor={props?.outlineColor ?? BorderColor.WHITE}
        activeOutlineColor={BorderColor.ACTIVE}
        mode={'outlined'}
        outlineStyle={{
          borderRadius: props?.borderRadius ?? MS_100,
          borderWidth: MS_1
        }}
        contentStyle={{
          paddingTop: props?.multiLine ?? false ? VS_10 : 0,
          paddingBottom: props?.multiLine ?? false ? VS_10 : 0
        }}
        textAlignVertical={'top'}
        onFocus={props.onFocus}
        multiline={props.multiLine ?? false}
        editable={props.editable}
        numberOfLines={props.numberOfLines}
        onSubmitEditing={props.onSubmitEditing}
        onChangeText={props.onChangeText}
        value={props.value}
        textColor={props?.textColor ?? TextColor.WHITE}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        placeholderTextColor={TextColor.GRAY}
        style={{
          backgroundColor: props.bgColor ?? BLACK,
          width: props.width ?? BUTTON_WIDTH,
          height: props.height ?? BUTTON_HEIGHT,
          fontSize: props.fontSize ?? MS_14
        }}
        right={props.right}
        left={props.left}
        disabled={props.disabled ?? false}
      />
      <SpaceView height={VS_2} />
      {props.showValidation ?? false ? (
        <BaseText
          fontSize={MS_12}
          style={{
            color: TextColor.ALERT,
            width: props.width ?? BUTTON_WIDTH,
            paddingStart: HS_10,
            marginTop: VS_5
          }}
        >
          {props.validationText}
        </BaseText>
      ) : (
        false
      )}
    </View>
  );
};

export const BaseTextField = React.memo(BaseTextFieldView);
