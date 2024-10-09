import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("El email es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es requerida"),
});

export default function LoginScreen() {
  const handleSubmit = (values) => {
    Alert.alert(
      "Login Successful",
      "Has iniciado sesión con éxito.",
      [
        {
          text: "OK",
          onPress: () => router.push("/cpp"), // Redirigir a la página de inicio
        },
      ],
      { cancelable: false }
    );
  };

  const handleProccess = () => {
    router.push("/cpp");
  };
  const handleRegister = () => {
    router.push("/registro");
  };

  return (
    <Container>
      <Title>Hola!</Title>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
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
          <FormContainer>
            <Label>Email</Label>
            <Input
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="hola@gmail.com"
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}

            <Label>Contraseña</Label>
            <Input
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="●●●●●●●●"
              secureTextEntry
            />
            {errors.password && touched.password && (
              <ErrorText>{errors.password}</ErrorText>
            )}

            <Button onPress={handleProccess}>
              <ButtonText>Ingresar</ButtonText>
            </Button>

            <Footer>
              <FooterText>
                ¿Todavía no tienes una cuenta?{" "}
                <TouchableOpacity onPress={handleRegister}>
                  <RegisterText>Regístrate</RegisterText>
                </TouchableOpacity>
              </FooterText>
            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
}

// Estilos
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const FormContainer = styled.View`
  width: 100%;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: #000;
`;

const Input = styled.TextInput`
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
`;

const ErrorText = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: black;
  border-radius: 25px;
  padding: 15px;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

const Footer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

const FooterText = styled.Text`
  font-size: 14px;
  color: #000;
`;

const RegisterText = styled.Text`
  font-weight: bold;
  color: #000;
`;
