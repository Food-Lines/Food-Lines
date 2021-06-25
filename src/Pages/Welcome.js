import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from "./../Components/styles";

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage
          resizeMode="contain"
          source={require("./../Assets/backgroundImage.jpg")}
        />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome</PageTitle>
          <SubTitle welcome={true}>John Smith</SubTitle>
          <StyledFormArea>
            <Avatar
              resizeMode="cover"
              source={require("./../Assets/mockPFP.jpg")}
            />
            <Line />
            <StyledButton onPress={() => {}} title="Submit">
              <ButtonText>Go to Console</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
