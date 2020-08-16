import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './src/routes';
import AppContainer from './src/hooks';

export const App: React.FC = () => (
  <View style={{ backgroundColor: '#312e38', flex: 1 }}>
    <AppContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Routes />
    </AppContainer>
  </View>
);
