/* REACT  */
import React from 'react';
import {KeyboardTypeOptions, View} from 'react-native';

/* MODULES */
import {TextInput} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {WHITE} from '../../../styling/colors';
import {VS_2, MS_12} from '../../../styling/mixins';
import {BaseHeight, BaseWidth} from '../../../utils/Contants';
import SpaceView from '../space_view';
import style from './style';
import {BaseText} from '../text';

/* CUSTOM MODULES */

interface BaseTextFieldProps {
  label: string;
  onChangeText: (value: string) => void;
  onFocus: () => void;
  onSubmitEditing: () => void;
  value: string;
  secureTextEntry: boolean;
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
}

const BaseTextField = (props: BaseTextFieldProps) => {
  return (
    <View>
      <BaseText style={style.mainContainer}>{props.label}</BaseText>

      <TextInput
        outlineColor="transparent"
        activeOutlineColor={Colors.PRIMARY}
        contentStyle={{height: props.height ?? BaseHeight}}
        underlineColor={WHITE}
        textAlignVertical={'top'}
        onFocus={props.onFocus}
        multiline={props.multiLine}
        editable={props.editable}
        numberOfLines={props.numberOfLines}
        onSubmitEditing={props.onSubmitEditing}
        onChangeText={props.onChangeText}
        value={props.value}
        activeUnderlineColor={'blue'}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        style={{
          backgroundColor: props.bgColor ?? WHITE,
          width: props.width ?? BaseWidth,
          height: props.height ?? BaseHeight,
          textAlign: 'auto',
        }}
        right={props.right}
        left={props.left}
      />
      <SpaceView height={VS_2} />
      {props.showValidation ? (
        <BaseText
          fontSize={MS_12}
          style={{color: 'red', width: props.width ?? BaseWidth}}>
          {props.validationText}
        </BaseText>
      ) : (
        <BaseText />
      )}
    </View>
  );
};

export default BaseTextField;
