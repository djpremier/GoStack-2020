import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
