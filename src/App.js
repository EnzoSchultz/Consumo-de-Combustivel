import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InputScreen from "./src/screens/InputScreen";
import ResultScreen from "./src/screens/ResultScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrada">
        <Stack.Screen
          name="Entrada"
          component={InputScreen}
          options={{ title: "Calcular Consumo" }}
        />
        <Stack.Screen
          name="Resultado"
          component={ResultScreen}
          options={{ title: "Resultado" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}