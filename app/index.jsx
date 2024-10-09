import { useState } from "react";
import { router } from "expo-router";
import styled from "styled-components/native";
import { Image } from "react-native-web";
export default function Index() {
  // Estados para manejar si el botón está presionado
  const [isStartPressed, setIsStartPressed] = useState(false);
  const [isSecondPressed, setIsSecondPressed] = useState(false);

  return (
    <Container>
      <StyledImage source={require("../assets/walker.png")} />

      <StartButton
        isPressed={isStartPressed}
        onPressIn={() => setIsStartPressed(true)}
        onPressOut={() => setIsStartPressed(false)}
        onPress={() => {
          router.push("/login");
        }}
      >
        <ButtonText isPressed={isStartPressed}>Propietario</ButtonText>
      </StartButton>

      <SecondtButton
        isPressed={isSecondPressed}
        onPressIn={() => setIsSecondPressed(true)}
        onPressOut={() => setIsSecondPressed(false)}
        onPress={() => {
          router.push("/ConversorScreen");
        }}
      >
        <ButtonText isPressed={isSecondPressed}>Paseador</ButtonText>
      </SecondtButton>
    </Container>
  );
}
const StyledImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: -200px;
`;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 50px;
  font-weight: 800;
  color: #62513a;
`;

const StartButton = styled.TouchableOpacity`
  background-color: ${(props) => (props.isPressed ? "black" : "transparent")};
  border-color: black;
  border-width: 1px;
  padding: 10px;
  width: 200px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100px;
  margin-top: 200px;
`;

const SecondtButton = styled.TouchableOpacity`
  background-color: ${(props) => (props.isPressed ? "black" : "transparent")};
  border-color: black;
  border-width: 1px;
  padding: 10px;
  width: 200px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  margin-top: 50px;
`;

const ButtonText = styled.Text`
  color: ${(props) => (props.isPressed ? "white" : "black")};
  text-align: center;
`;
