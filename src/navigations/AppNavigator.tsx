import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppStackParamList} from './types';
import HomeScreen from '../screens/home_screen';
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
