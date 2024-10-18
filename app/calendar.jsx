import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export default function CalendarScreen() {
  const [selectedTab, setSelectedTab] = useState("programados"); // Estado para alternar entre "Programados" y "Historial"

  return (
    <Container>
      <Header>
        {/*         <BackButton>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </BackButton> */}
        <Title>Calendario</Title>
      </Header>

      <TabsContainer>
        <TabButton
          selected={selectedTab === "programados"}
          onPress={() => setSelectedTab("programados")}
        >
          <TabText selected={selectedTab === "programados"}>
            Programados
          </TabText>
        </TabButton>
        <TabButton
          selected={selectedTab === "historial"}
          onPress={() => setSelectedTab("historial")}
        >
          <TabText selected={selectedTab === "historial"}>Historial</TabText>
        </TabButton>
      </TabsContainer>

      <TabIndicator selectedTab={selectedTab} />

      <ScheduledCard>
        <PawIconContainer>
          <FontAwesome name="paw" size={28} color="#FF69B4" />
        </PawIconContainer>
        <CardDetails>
          <CardText>Paseo pendiente</CardText>
          <WalkerName>Camila</WalkerName>
        </CardDetails>
        <TimeContainer>
          <TodayText>Hoy</TodayText>
          <TimeText>19:00</TimeText>
        </TimeContainer>
      </ScheduledCard>

      <BottomNav>
        <NavItem onPress={() => navigation.navigate("mainScreen")}>
          <FontAwesome name="home" size={28} color="#FFFFFF" />
        </NavItem>
        <NavItem selected>
          <FontAwesome name="calendar" size={28} color="#000000" />
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
}

// Styled-components
const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const BackButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

const TabsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
`;

const TabButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${(props) => (props.selected ? "#fff" : "transparent")};
  border-radius: 20px;
`;

const TabText = styled.Text`
  color: ${(props) => (props.selected ? "#000" : "#fff")};
  font-size: 16px;
`;

const TabIndicator = styled.View`
  height: 2px;
  background-color: #fff;
  margin: 0 30px;
  margin-bottom: 20px;
  ${(props) => (props.selectedTab === "programados" ? "left: 0;" : "right: 0;")}
  position: absolute;
  bottom: 0;
`;

const ScheduledCard = styled.View`
  background-color: #1c1c1c;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  margin: 0 20px;
  margin-top: 10px;
`;

const PawIconContainer = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 50px;
  margin-right: 10px;
`;

const CardDetails = styled.View`
  flex: 1;
`;

const CardText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

const WalkerName = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const TimeContainer = styled.View`
  align-items: flex-end;
`;

const TodayText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

const TimeText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const BottomNav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #1c1c1c;
  padding: 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const NavItem = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  ${(props) => props.selected && "background-color: #fff; border-radius: 50px;"}
`;
