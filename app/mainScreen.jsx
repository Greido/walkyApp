import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export default function WalkyScreen() {
  const [selectedTab, setSelectedTab] = useState("paseadores"); // Estado para manejar la pestaña seleccionada

  return (
    <Container>
      <Header>
        <Title>walky</Title>
      </Header>

      <PetContainer>
        <PetCard>
          <PetImage source={{ uri: "https://link.to/dog-image" }} />
          <PetName>Barto</PetName>
        </PetCard>
        <EmptyPetCard />
      </PetContainer>

      <ButtonsContainer>
        <TabButton
          selected={selectedTab === "paseadores"}
          onPress={() => setSelectedTab("paseadores")}
        >
          <ButtonText selected={selectedTab === "paseadores"}>
            Paseadores
          </ButtonText>
        </TabButton>
        <TabButton
          selected={selectedTab === "disponibles"}
          onPress={() => setSelectedTab("disponibles")}
        >
          <ButtonText selected={selectedTab === "disponibles"}>
            Disponibles ahora
          </ButtonText>
        </TabButton>
      </ButtonsContainer>

      <ScrollView>
        {selectedTab === "paseadores" ? (
          <>
            <WalkerCard>
              <WalkerImage source={{ uri: "https://link.to/camila-image" }} />
              <WalkerInfo>
                <WalkerName>Camila</WalkerName>
                <WalkerRating>
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star-half" size={16} color="#FFD700" />
                </WalkerRating>
              </WalkerInfo>
              <HeartIcon>
                <FontAwesome name="heart-o" size={24} color="#FFFFFF" />
              </HeartIcon>
            </WalkerCard>
            {/* Más paseadores */}
            <WalkerCard>
              <WalkerImage source={{ uri: "https://link.to/camila-image" }} />
              <WalkerInfo>
                <WalkerName>Camila</WalkerName>
                <WalkerRating>
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star-half" size={16} color="#FFD700" />
                </WalkerRating>
              </WalkerInfo>
              <HeartIcon>
                <FontAwesome name="heart-o" size={24} color="#FFFFFF" />
              </HeartIcon>
            </WalkerCard>
            <WalkerCard>
              <WalkerImage source={{ uri: "https://link.to/camila-image" }} />
              <WalkerInfo>
                <WalkerName>Camila</WalkerName>
                <WalkerRating>
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star-half" size={16} color="#FFD700" />
                </WalkerRating>
              </WalkerInfo>
              <HeartIcon>
                <FontAwesome name="heart-o" size={24} color="#FFFFFF" />
              </HeartIcon>
            </WalkerCard>
            <WalkerCard>
              <WalkerImage source={{ uri: "https://link.to/camila-image" }} />
              <WalkerInfo>
                <WalkerName>Camila</WalkerName>
                <WalkerRating>
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star-half" size={16} color="#FFD700" />
                </WalkerRating>
              </WalkerInfo>
              <HeartIcon>
                <FontAwesome name="heart-o" size={24} color="#FFFFFF" />
              </HeartIcon>
            </WalkerCard>
          </>
        ) : (
          <>
            {/* Mostrar lista de paseadores disponibles ahora */}
            <WalkerCard>
              <WalkerImage source={{ uri: "https://link.to/juan-image" }} />
              <WalkerInfo>
                <WalkerName>Juan</WalkerName>
                <WalkerRating>
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                  <FontAwesome name="star" size={16} color="#FFD700" />
                </WalkerRating>
              </WalkerInfo>
              <HeartIcon>
                <FontAwesome name="heart-o" size={24} color="#FFFFFF" />
              </HeartIcon>
            </WalkerCard>
            {/* Más disponibles */}
          </>
        )}
      </ScrollView>

      <BottomNav>
        <NavItem>
          <FontAwesome name="home" size={28} color="#FFFFFF" />
        </NavItem>
        <NavItem onPress={() => navigation.navigate("calendar")}>
          <FontAwesome name="calendar" size={28} color="#FFFFFF" />
        </NavItem>
        <NavItem selected>
          <FontAwesome name="paw" size={28} color="#FF69B4" />
        </NavItem>
        <NavItem>
          <FontAwesome name="user" size={28} color="#FFFFFF" />
        </NavItem>
      </BottomNav>
    </Container>
  );
}

// Styled-components
const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

const Header = styled.View`
  align-items: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`;

const PetContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 20px 0;
`;

const PetCard = styled.View`
  align-items: center;
  margin: 0 10px;
`;

const PetImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const PetName = styled.Text`
  color: #ffffff;
  font-size: 18px;
  margin-top: 10px;
`;

const EmptyPetCard = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 2px solid #ffffff;
  margin: 0 10px;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const TabButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${(props) => (props.selected ? "#ffffff" : "transparent")};
  border-radius: 20px;
  margin: 0 5px;
`;

const ButtonText = styled.Text`
  color: ${(props) => (props.selected ? "#000" : "#ffffff")};
`;

const WalkerCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #1c1c1c;
  padding: 10px;
  margin: 10px 20px;
  border-radius: 10px;
`;

const WalkerImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

const WalkerInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const WalkerName = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

const WalkerRating = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const HeartIcon = styled.TouchableOpacity`
  padding: 10px;
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
