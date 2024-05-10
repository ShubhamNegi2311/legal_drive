import {View} from 'react-native';
import React from 'react';
import {style} from './style';

const LoginScreen = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.upperContainer} />
      <View style={style.lowerContainer} />
    </View>
  );
};

export default LoginScreen;
