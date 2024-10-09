import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { router } from "expo-router";

// Validación con Yup
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Requerido"),
  password: Yup.string().min(6, "Demasiado corta").required("Requerido"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Requerido"),
});

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <Container>
      <Title>Registrate</Title>

      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
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
            <Label>Email</Label>
            <StyledInput
              placeholder="hola@gmail.com"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <ErrorText>{errors.email}</ErrorText>
            ) : null}

            <Label>Contraseña</Label>
            <InputWrapper>
              <StyledInput
                placeholder="********"
                secureTextEntry={!showPassword}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <EyeButton
                onPress={() => setShowPassword(!showPassword)}
              ></EyeButton>
            </InputWrapper>
            {errors.password && touched.password ? (
              <ErrorText>{errors.password}</ErrorText>
            ) : null}

            <Label>Confirmar contraseña</Label>
            <InputWrapper>
              <StyledInput
                placeholder="********"
                secureTextEntry={!showConfirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
              <EyeButton
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              ></EyeButton>
            </InputWrapper>
            {errors.confirmPassword && touched.confirmPassword ? (
              <ErrorText>{errors.confirmPassword}</ErrorText>
            ) : null}

            <SubmitButton onPress={handleSubmit}>
              <SubmitButtonText>Ingresar</SubmitButtonText>
            </SubmitButton>
          </>
        )}
      </Formik>

      <RegisterText>
        ¿Ya tienes una cuenta?{" "}
        <TouchableOpacity onPress={handleLogin}>
          <Login>Iniciar sesion</Login>
        </TouchableOpacity>
      </RegisterText>
    </Container>
  );
}
const Login = styled.Text`
  font-weight: bold;
  color: #000;
`;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
`;

const Label = styled.Text`
  align-self: flex-start;
  margin-bottom: 5px;
  font-size: 16px;
  color: #000;
`;

const StyledInput = styled.TextInput`
  border: 1px solid #000;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  //border: 1px solid #000;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const EyeButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #000;
  padding: 15px;
  width: 100%;
  align-items: center;
  border-radius: 30px;
  margin-top: 20px;
`;

const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const RegisterText = styled.Text`
  margin-top: 20px;
  color: #000;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
`;
