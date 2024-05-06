import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppStackParamList} from './types';
import DashboardNavigator from './DashboardNavigator';
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="dashboardNavigator" component={DashboardNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
