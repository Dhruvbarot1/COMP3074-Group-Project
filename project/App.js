import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantList from './components/RestaurantList';
import AddRestaurant from './components/AddRestaurant';
import RestaurantDetails from './components/RestaurantDetails';
import AboutScreen from './components/AboutScreen';
import SplashScreen from './components/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RestaurantList"
          component={RestaurantList}
          options={{ title: 'Restaurants' }}
        />
        <Stack.Screen
          name="AddRestaurant"
          component={AddRestaurant}
          options={{ title: 'Add / Edit Restaurant' }}
        />
        <Stack.Screen
          name="RestaurantDetails"
          component={RestaurantDetails}
          options={{ title: 'Restaurant Details' }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'About' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
