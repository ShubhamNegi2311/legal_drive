import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {DashboardStackParamList} from './types';
import HomeScreen from 'screens/home_screen';
import FilesScreen from 'screens/files_screen';
import ProfileScreen from 'screens/profile_screen';
import SearchScreen from 'screens/search_screen';
import {PRIMARY} from 'styles/colors';
import {VS_70, VS_10, MS_12} from 'styles/mixins';
import Home from 'assets/images/home-2.svg';
import SelectedHome from 'assets/images/selected_home.svg';
import File from 'assets/images/File.svg';
import SelectedFile from 'assets/images/Selected_File.svg';
import Search from 'assets/images/Search.svg';
import Profile from 'assets/images/Profile.svg';
import SelectedProfile from 'assets/images/selected_profile.svg';
const Tab = createBottomTabNavigator<DashboardStackParamList>();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor: '#999999',
        // tabBarStyle: {paddingVertical:}
        tabBarStyle: {
          height: VS_70,
          paddingBottom: VS_10,
        },
        tabBarLabelStyle: {
          fontSize: MS_12,
        },
      }}>
      <Tab.Screen
        name={'homeScreen'}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (focused ? <SelectedHome /> : <Home />),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={'filesScreen'}
        options={{
          title: 'Files',
          tabBarIcon: ({focused}) => (focused ? <SelectedFile /> : <File />),
        }}
        component={FilesScreen}
      />
      <Tab.Screen
        name={'searchScreen'}
        options={{
          title: 'Search',
          tabBarIcon: () => <Search />,
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name={'profileScreen'}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) =>
            focused ? <SelectedProfile /> : <Profile />,
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
