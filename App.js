import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// SCREENS IMPORT
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// OUR SCREENS -> Linked to root
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  // SCREEN CONTAINER
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        //screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
          screenOptions={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
