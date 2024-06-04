import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthenticationNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import {AuthenticationContext} from 'contexts/AuthenticationContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootNavigator = () => {
  const {isLoggedIn, setUserLoggedIn} = React.useContext(AuthenticationContext);

  React.useEffect(() => {
    const checkLogIn = async () => {
      try {
        if (await AsyncStorage.getItem('PHONE_NUMBER')) {
          setUserLoggedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkLogIn();
  }, []);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
