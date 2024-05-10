import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {DashboardStackParamList} from './types';
import HomeScreen from 'screens/home_screen';
import FilesScreen from 'screens/files_screen';
import ProfileScreen from 'screens/profile_screen';
import SearchScreen from 'screens/search_screen';
import Home_Icon from 'react-native-vector-icons/Entypo';
import File_Icon from 'react-native-vector-icons/FontAwesome';
import Search_Icon from 'react-native-vector-icons/AntDesign';
import User_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BLACK, PRIMARY} from 'styles/colors';
import {VS_70, VS_10, MS_12} from 'styles/mixins';

const Tab = createBottomTabNavigator<DashboardStackParamList>();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor: BLACK,
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
          tabBarIcon: ({focused}) => (
            <Home_Icon
              name="home"
              color={focused ? PRIMARY : BLACK}
              size={25}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={'filesScreen'}
        options={{
          title: 'Files',
          tabBarIcon: ({focused}) => (
            <File_Icon
              name={focused ? 'file' : 'file-o'}
              color={focused ? PRIMARY : BLACK}
              size={25}
            />
          ),
        }}
        component={FilesScreen}
      />
      <Tab.Screen
        name={'searchScreen'}
        options={{
          title: 'Search',
          tabBarIcon: ({focused}) => (
            <Search_Icon
              name="search1"
              color={focused ? PRIMARY : BLACK}
              size={25}
            />
          ),
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name={'profileScreen'}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <User_Icon
              name={focused ? 'account-circle' : 'account-circle-outline'}
              color={focused ? PRIMARY : BLACK}
              size={25}
            />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
