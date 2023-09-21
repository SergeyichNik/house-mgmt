import { ServicesButtonsGroup } from "pages/services";
import React from "react";
import styled from "styled-components/native";

const ServicesScreen = () => {
  return (
    <Container>
      <ServicesButtonsGroup />
    </Container>
  );
};

const Container = styled.View`
  flex-grow: 1;
`;

export default ServicesScreen;
