import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {DashboardStackParamList} from './types';
import HomeScreen from '../screens/home_screen';
import FilesScreen from '../screens/files_screen';
import ProfileScreen from '../screens/profile_screen';
const Tab = createBottomTabNavigator<DashboardStackParamList>();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name={'homeScreen'}
        // options={{
        //   tabBarLabel: NAV_ICON.DASHBOARD,
        // }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={'filesScreen'}
        //     options={{
        //       tabBarLabel: NAV_ICON.DASHBOARD,
        //     }}
        component={FilesScreen}
      />
      <Tab.Screen
        name={'profileScreen'}
        // options={{
        //   tabBarLabel: NAV_ICON.DASHBOARD,
        // }}

        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
