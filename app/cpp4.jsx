import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

export default function AddPhotoScreen() {
  const [image, setImage] = useState(null);
  const router = useRouter();

  const pickImage = async () => {
    // Solicitar permisos para acceder a la cámara
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Se requieren permisos de cámara para continuar.");
      return;
    }

    // Abrir la cámara
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Guardar la imagen seleccionada
    }
  };

  const handleCpp5 = () => {
    router.push("/cpp5");
  };

  return (
    <Container>
      <Title>Añadí foto de tu mascota</Title>

      <TouchableOpacity onPress={pickImage}>
        <ImagePickerWrapper>
          {image ? (
            <ImagePreview source={{ uri: image }} />
          ) : (
            <CameraIconWrapper>
              <AntDesign name="camera" size={40} color="black" />
              <AddIcon>
                <AntDesign name="pluscircle" size={20} color="black" />
              </AddIcon>
            </CameraIconWrapper>
          )}
        </ImagePickerWrapper>
      </TouchableOpacity>

      <ProgressBar>
        <ProgressIndicator active />
        <ProgressIndicator active />
        <ProgressIndicator active />
        <ProgressIndicator active />
      </ProgressBar>

      <SubmitButton onPress={() => router.push("/cpp5")}>
        <SubmitButtonText>Siguiente</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}

// Styled-components
const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #000000;
`;

const ImagePickerWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CameraIconWrapper = styled.View`
  background-color: #d1c4e9;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const AddIcon = styled.View`
  position: absolute;
  bottom: 0;
  right: -10px;
`;

const ImagePreview = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const ProgressBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ProgressIndicator = styled.View`
  width: 50px;
  height: 4px;
  background-color: ${(props) => (props.active ? "#000000" : "#d3d3d3")};
  border-radius: 2px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #000000;
  padding: 15px;
  align-items: center;
  border-radius: 30px;
`;

const SubmitButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
