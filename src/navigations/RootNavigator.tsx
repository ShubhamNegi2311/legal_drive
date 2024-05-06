import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthenticationNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import {AuthenticationContext} from '../contexts/AuthenticationContext';

const RootNavigator = () => {
  const {isLoggedIn} = React.useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
