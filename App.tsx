import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './src/constants/stack';
import Home from './src/screens/Home';
import {theme} from './src/theme';
import Login from './src/screens/Login';
import Register from './src/screens/Registration';
import ConfirmCode from './src/screens/ConfirmCode';

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen name={'ConfirmCode'} component={ConfirmCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
