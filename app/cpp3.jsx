import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export default function Comportamiento() {
  const [selectedSize, setSelectedSize] = useState(null);
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackButtonText>{"<-"}</BackButtonText>
      </BackButton>
    </Container>
  );
}
