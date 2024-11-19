import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { FontAwesome } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 20px;
`;
const BottomNav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #1c1c1c;
  padding: 15px;
`;

const NavItem = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  ${(props) =>
    props.selected && `background-color: #ffffff; border-radius: 50px;`}
`;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
`;

const InputContainer = styled.View`
  margin-vertical: 10px;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.TextInput`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SliderContainer = styled.View`
  margin-vertical: 10px;
`;

const SliderLabel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SliderText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const SearchButton = styled.TouchableOpacity`
  background-color: #333;
  padding: 15px;
  align-items: center;
  border-radius: 25px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const WalkyScreen = () => {
  const [duration, setDuration] = useState(60);
  const [distance, setDistance] = useState(4);

  return (
    <Container>
      <Header>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Title>Encuentra un paseador</Title>
      </Header>

      <InputContainer>
        <Label>Ubicación</Label>
        <Input
          placeholder="Ingrese la dirección de recogida"
          placeholderTextColor="#888"
        />
      </InputContainer>

      <InputContainer>
        <Label>Fecha</Label>
        <Input placeholder="dd/mm/aa" placeholderTextColor="#888" />
      </InputContainer>

      <InputContainer>
        <Label>Horario</Label>
        <Input
          placeholder="Ingrese horario de recogida"
          placeholderTextColor="#888"
        />
      </InputContainer>

      <SliderContainer>
        <SliderLabel>
          <SliderText>Duración</SliderText>
          <SliderText>{duration} min</SliderText>
        </SliderLabel>
        <Slider
          value={duration}
          minimumValue={30}
          maximumValue={120}
          step={10}
          minimumTrackTintColor="#fff"
          maximumTrackTintColor="#555"
          onValueChange={(value) => setDuration(value)}
        />
      </SliderContainer>

      <SliderContainer>
        <SliderLabel>
          <SliderText>Distancia</SliderText>
          <SliderText>{distance} km</SliderText>
        </SliderLabel>
        <Slider
          value={distance}
          minimumValue={1}
          maximumValue={10}
          step={1}
          minimumTrackTintColor="#fff"
          maximumTrackTintColor="#555"
          onValueChange={(value) => setDistance(value)}
        />
      </SliderContainer>

      <SearchButton>
        <ButtonText>Buscar</ButtonText>
      </SearchButton>
      <BottomNav>
        <NavItem selected onPress={() => navigation.navigate("Search")}>
          <FontAwesome name="search" size={28} color="#000000" />
        </NavItem>
        <NavItem>
          <FontAwesome name="home" size={28} color="#FFFFFF" />
        </NavItem>
        <NavItem onPress={() => navigation.navigate("calendar")}>
          <FontAwesome name="calendar" size={28} color="#FFFFFF" />
        </NavItem>
        <NavItem>
          <FontAwesome name="paw" size={28} color="#FF69B4" />
        </NavItem>
        <NavItem>
          <FontAwesome name="user" size={28} color="#FFFFFF" />
        </NavItem>
      </BottomNav>
    </Container>
  );
};

export default WalkyScreen;
