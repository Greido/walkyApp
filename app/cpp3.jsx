import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";

// Esquema de validación con Yup
const ObservacionesSchema = Yup.object().shape({
  observaciones: Yup.string().required("Requerido"),
});

export default function ObservacionesScreen() {
  const router = useRouter();

  const handleSubmit = (values) => {
    console.log("Observaciones enviadas:", values);
    router.push("/ruta-siguiente"); // Cambia a la ruta que necesites
  };

  const handleCpp4 = () => {
    router.push("/cpp4");
  };

  return (
    <Container>
      <Title>Comportamiento y observaciones</Title>
      <Subtitle>
        Si tu perro muestra comportamiento inusual o requiere cuidados
        especiales, hacénoslo saber.
      </Subtitle>

      <Formik
        initialValues={{ observaciones: "" }}
        validationSchema={ObservacionesSchema}
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
            <StyledInput
              placeholder="(Por ejemplo: alergias, es agresivo con otros perros, etc.)"
              onChangeText={handleChange("observaciones")}
              onBlur={handleBlur("observaciones")}
              value={values.observaciones}
              multiline
              numberOfLines={4}
            />
            {errors.observaciones && touched.observaciones ? (
              <ErrorText>{errors.observaciones}</ErrorText>
            ) : null}

            <ProgressBar>
              <ProgressIndicator active />
              <ProgressIndicator active />
              <ProgressIndicator active />
              <ProgressIndicator />
            </ProgressBar>

            <SubmitButton onPress={handleCpp4}>
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
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000000;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
  color: #808080;
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
`;

const SubmitButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
