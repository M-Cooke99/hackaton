import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

// SCREENS IMPORT
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// OUR SCREENS -> Linked to root
import WelcomeScreen from "./screens/WelcomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SearchedScreen from "./screens/SearchedScreen";
import CreateNewScreen from "./screens/CreateNewScreen";

export default function App() {
  // SCREEN CONTAINER
  const Stack = createStackNavigator();
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
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
          <Stack.Screen name="CreateNewScreen" component={CreateNewScreen} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="SearchedScreen" component={SearchedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
