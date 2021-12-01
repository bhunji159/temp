import React from "react";
import { Button, View, Text } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../navigations/Tab";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Home = ({ navigation }) => {
  return <TabNavigation />;
};

export default Home;
/*


*/
