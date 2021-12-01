import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import TabNavigation from "../navigations/Tab";
import { NavigationContainer } from "@react-navigation/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const goHome = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

const Login = ({ navigation }) => {
  return (
    <Container>
      <StyledText>Log In</StyledText>
      <Button
        title="Sign In"
        onPress={() => navigation.reset({ routes: [{ name: "Home" }] })}
      />
      <Button title="create Account" />
    </Container>
  );
};

export default Login;
