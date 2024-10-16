import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

export default function ProfileCreatedScreen() {
  const next = () => {
    router.push("/mainScreen");
  };
  return (
    <Container>
      <Message>¡Tu perfil ha sido creado!</Message>

      {/*       <ProfileImageWrapper>
        <ProfileImage source={require("./path-to-your-image.png")} />
      </ProfileImageWrapper> */}

      <NextButton onPress={next}>
        <ButtonText>Siguiente</ButtonText>
      </NextButton>
    </Container>
  );
}

// Styled-components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Message = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
`;

const ProfileImageWrapper = styled.View`
  background-color: #ffb2f2;
  padding: 20px;
  border-radius: 50px;
  margin-bottom: 30px;
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const NextButton = styled(TouchableOpacity)`
  background-color: #ff69b4;
  padding: 15px 30px;
  border-radius: 25px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;
