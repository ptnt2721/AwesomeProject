/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import Browse from './screens/Browse';
import Test from './screens/Test'
import App1 from './screens/App1';
import ViewItem from './screens/ViewItem'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Test" component={Test}/>
        <Stack.Screen name="App1" component={App1}/>
        <Stack.Screen name="ViewItem" component={ViewItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
