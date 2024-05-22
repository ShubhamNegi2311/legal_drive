import React from 'react';

import RootNavigator from './src/navigations/RootNavigator';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <RootNavigator />
    </GluestackUIProvider>
  );
};

export default App;
