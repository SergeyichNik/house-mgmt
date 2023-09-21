import { Feather } from "@expo/vector-icons";
import icon from "assets/images/contact-icon.png";
import React from "react";
import { Paper } from "shared/ui/Paper";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

const ContactsScreen = () => {
  return (
    <Container>
      <Paper jc="space-between" ai="center" row mb={10} primary>
        <Icon source={icon} />
        <CompanyName>
          <Text md regular lh={26} ta="center">
            Управляющая компания
          </Text>
          <Text lh={26} md regular ta="center">
            ООО “Уютный дом”
          </Text>
        </CompanyName>
        <Fake />
      </Paper>
      <Paper>
        <Text md ta="center" dark regular>
          Наши адреса и контакты
        </Text>
        <ContactRow>
          <IconContainer>
            <Feather name="phone" size={24} color="black" />
          </IconContainer>
          <Text dark>+ 7 (900) 100 20 30 </Text>
          <Text dark> + 7 (900) 100 20 30</Text>
        </ContactRow>
        <ContactRow>
          <IconContainer>
            <Feather name="map-pin" size={24} color="black" />
          </IconContainer>
          <Text dark>улица Свободная дом 4 корпус 2</Text>
        </ContactRow>
        <ContactRow>
          <IconContainer>
            <Feather name="mail" size={24} color="black" />
          </IconContainer>
          <Text dark>mgmt-co@mail.info</Text>
        </ContactRow>
      </Paper>
    </Container>
  );
};

const Container = styled.View`
  padding: 10px;
`;

const CompanyName = styled.View`
  align-items: center;
`;

const ContactRow = styled.View`
  align-items: center;
  height: 50px;
  flex-direction: row;
`;

const IconContainer = styled.View`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid;
`;

const Fake = styled.View`
  width: 60px;
  height: 60px;
`;

const Icon = styled.Image`
  width: 60px;
  height: 60px;
`;

export default ContactsScreen;
