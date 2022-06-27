import React from "react";
 // @ts-ignore
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/settingsScreen";
import TestScreen from "../screens/testScreen";

const Stack = createStackNavigator();

const Navigator = () => {
return <Stack.Navigator  headerMode="screen" screenOptions={{ headerStyle: { elevation: 0 }, cardStyle: { backgroundColor: "#fff" } }}>
    <Stack.Screen options={{ headerShown: false }} name="Home" component={SettingsScreen} />
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    <Stack.Screen name="TestScreen" component={TestScreen} />
</Stack.Navigator>;
};

export default Navigator;