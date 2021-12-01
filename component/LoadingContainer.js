import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Login from "./LoginContainer";

const Loading = () => {
  return (
    <View>
      <Text>Now Loading!</Text>
      <Button title="LoadingComplete" onPress={Login} />
    </View>
  );
};

export default Loading;
