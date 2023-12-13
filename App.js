import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Components/HomeScreen';
import DetailsScreen from './Components/DetailsScreen';
import AboutScreen from './Components/AboutScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Restorante" component={HomeScreen}/>
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        options={{ headerShown: false }}
        name="Home" 
        component={HomeStack}/>
        <Tab.Screen name="About Us" component={AboutScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
