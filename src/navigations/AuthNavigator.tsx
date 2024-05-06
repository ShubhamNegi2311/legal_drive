import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import LoginScreen from '../screens/login_screen';
import OtpScreen from '../screens/otp_screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="otpScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
