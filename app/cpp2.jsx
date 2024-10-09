import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export default function PetSizeScreen() {
  const [selectedSize, setSelectedSize] = useState(null);
  const navigation = useNavigation();

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleSubmit = () => {
    if (!selectedSize) {
      Alert.alert("Error", "Por favor, selecciona un tamaño.");
    } else {
      Alert.alert("Tamaño seleccionado", `Has seleccionado: ${selectedSize}`);
      // Aquí puedes redirigir a la siguiente pantalla:
      // navigation.navigate('NextScreen');
    }
  };

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackButtonText>{"<-"}</BackButtonText>
      </BackButton>

      <Title>El tamaño de la mascota</Title>
      <Subtitle>
        Selecciona el tamaño del perro. Esta información es importante para el
        paseador.
      </Subtitle>

      <SizeOptions>
        <SizeOption
          selected={selectedSize === "Pequeño"}
          onPress={() => handleSizeSelect("Pequeño")}
        >
          <OptionText>Pequeño</OptionText>
          <OptionSubText>0-10 kg</OptionSubText>
        </SizeOption>

        <SizeOption
          selected={selectedSize === "Mediano"}
          onPress={() => handleSizeSelect("Mediano")}
        >
          <OptionText>Mediano</OptionText>
          <OptionSubText>11-25 kg</OptionSubText>
        </SizeOption>

        <SizeOption
          selected={selectedSize === "Grande"}
          onPress={() => handleSizeSelect("Grande")}
        >
          <OptionText>Grande</OptionText>
          <OptionSubText>26-50 kg</OptionSubText>
        </SizeOption>

        <SizeOption
          selected={selectedSize === "Extra G"}
          onPress={() => handleSizeSelect("Extra G")}
        >
          <OptionText>Extra G</OptionText>
          <OptionSubText>50+ kg</OptionSubText>
        </SizeOption>
      </SizeOptions>

      <ProgressBar>
        <ProgressIndicator active />
        <ProgressIndicator active />
        <ProgressIndicator />
        <ProgressIndicator />
      </ProgressBar>

      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Siguiente</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}

// Styled-components
const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

const BackButton = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

const BackButtonText = styled.Text`
  font-size: 18px;
  color: #000;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #808080;
  margin-bottom: 30px;
`;

const SizeOptions = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SizeOption = styled.TouchableOpacity`
  width: 45%;
  padding: 20px;
  border: 1px solid ${(props) => (props.selected ? "#000" : "#d3d3d3")};
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: center;
  background-color: ${(props) => (props.selected ? "#f0f0f0" : "#fff")};
`;

const OptionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const OptionSubText = styled.Text`
  font-size: 14px;
  color: #808080;
`;

const ProgressBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ProgressIndicator = styled.View`
  width: 50px;
  height: 4px;
  background-color: ${(props) => (props.active ? "#000" : "#d3d3d3")};
  border-radius: 2px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #000;
  padding: 15px;
  align-items: center;
  border-radius: 30px;
`;

const SubmitButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
