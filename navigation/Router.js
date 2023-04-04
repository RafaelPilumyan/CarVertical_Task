import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import LoadingScreen from "../screens/LoadingScreen";
import OffersScreen from "../screens/OffersScreen";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Offers" component={OffersScreen} />
    </Stack.Navigator>
  );
};

export default Router;
