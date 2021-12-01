import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../_screens/HomeContainer";
import List from "../_screens/List";
import Item from "../_screens/Item";
import Login from "../_screens/LoginContainer";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        cardStyle: { backgroundColor: "#ffffff" },
        headerStyle: {
          height: 110,
          backgroundColor: "#FFD8CC",
          borderBottomWidth: 1,
          borderBottomColor: "#99154E",
        },
        headerTitleStyle: { color: "#000000", fontsize: 24 },
        headerTitleAlign: "center",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
