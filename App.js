import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import BurgerScreen from "./Screens/Burger";
import PizzaScreen from "./Screens/Pizza";
import NoodlesScreen from "./Screens/Noodles";
import SandwichScreen from "./Screens/Sandwich";
import ChipsScreen from "./Screens/Chips";
import FriesScreen from "./Screens/Fries";

const Stack = createStackNavigator();
function App (){
  return( 
    <NavigationContainer>
    
    <Stack.Navigator intitialRouteName="Home" screenOptions={{headerShown:false}} >
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Burger" component={BurgerScreen}/>
    <Stack.Screen name="Pizza" component={PizzaScreen}/>
    <Stack.Screen name="Noodles" component={NoodlesScreen}/>
    <Stack.Screen name="Sandwich" component={SandwichScreen}/>
    <Stack.Screen name="Chips" component={ChipsScreen}/>
        <Stack.Screen name="Fries" component={FriesScreen}/>
    </Stack.Navigator>

    </NavigationContainer>

  )
}

export default App;


