import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import AppProvider from './hooks';

const App: FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
