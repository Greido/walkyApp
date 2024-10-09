import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";

// Esquema de validación con Yup
const PetSchema = Yup.object().shape({
  nombre: Yup.string().required("Requerido"),
  raza: Yup.string().required("Requerido"),
  edad: Yup.string().required("Requerido"),
});

export default function PetScreen() {
  const handleSubmit = (values) => {
    Alert.alert(
      "Datos enviados",
      `Nombre: ${values.nombre}, Raza: ${values.raza}, Edad: ${values.edad}`
    );
    // Aquí puedes redirigir a otra pantalla usando router.push("/ruta")
  };

  return (
    <Container>
      <Title>Contanos sobre tu mascota</Title>
      <Subtitle>Introducí datos básicos sobre tu mascota.</Subtitle>

      <Formik
        initialValues={{ nombre: "", raza: "", edad: "" }}
        validationSchema={PetSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <Label>Nombre</Label>
            <StyledInput
              placeholder="Barto"
              onChangeText={handleChange("nombre")}
              onBlur={handleBlur("nombre")}
              value={values.nombre}
            />
            {errors.nombre && touched.nombre ? (
              <ErrorText>{errors.nombre}</ErrorText>
            ) : null}

            <Label>Raza</Label>
            <StyledInput
              placeholder="Chihuahua"
              onChangeText={handleChange("raza")}
              onBlur={handleBlur("raza")}
              value={values.raza}
            />
            {errors.raza && touched.raza ? (
              <ErrorText>{errors.raza}</ErrorText>
            ) : null}

            <Label>Edad</Label>
            <StyledInput
              placeholder="2 años"
              onChangeText={handleChange("edad")}
              onBlur={handleBlur("edad")}
              value={values.edad}
            />
            {errors.edad && touched.edad ? (
              <ErrorText>{errors.edad}</ErrorText>
            ) : null}

            <ProgressBar>
              <ProgressIndicator active />
              <ProgressIndicator />
              <ProgressIndicator />
              <ProgressIndicator />
            </ProgressBar>

            <SubmitButton onPress={() => router.push("/cpp2")}>
              <SubmitButtonText>Siguiente</SubmitButtonText>
            </SubmitButton>
          </>
        )}
      </Formik>
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
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000000;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  margin-bottom: 30px;
  color: #808080;
`;

const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 5px;
`;

const StyledInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #000;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
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
  margin-top: 20px;
`;

const SubmitButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
