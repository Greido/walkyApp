import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mainscreen from "./mainScreen";
import Calendar from "./calendar"; // Pantalla final

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WalkyScreen">
        <Stack.Screen name="mainscreen" component={Mainscreen} />
        <Stack.Screen name="calendar" component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
