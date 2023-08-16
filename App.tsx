import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MonthsScreen } from "./src/screens/meses";
import { DaysScreen } from "./src/screens/dias";
import { HorariosScreen } from "./src/screens/horarios";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
          name="Meses"
          component={MonthsScreen}
        />
        <Stack.Screen
          options={{
            animation: "slide_from_right",
            statusBarAnimation: "slide",
          }}
          name="Dias"
          component={DaysScreen}
        />
        <Stack.Screen
          options={{
            animation: "slide_from_right",
          }}
          name="Horários"
          component={HorariosScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
