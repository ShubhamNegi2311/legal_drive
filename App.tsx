import React from 'react';

import RootNavigator from './src/navigations/RootNavigator';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import AuthenticationContextProvider from 'contexts/AuthenticationContext';
const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <AuthenticationContextProvider>
        <RootNavigator />
      </AuthenticationContextProvider>
    </GluestackUIProvider>
  );
};

export default App;
