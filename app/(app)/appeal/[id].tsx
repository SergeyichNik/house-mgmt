import Stack from "expo-router/src/layouts/Stack";
import React from "react";
import { Paper } from "shared/ui/Paper";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import { useAppeal } from "../../../entity/appeal";

const ListDetailsPage = () => {
  const data = useAppeal((state) => state.selectedAppeal);
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: `Обращение № ${data.id}`,
          headerTitleAlign: "center",
        }}
      />
      <Container>
        <Paper fg={1}>
          <Header>
            <Text lh={20} dark regular>
              Обращение от {data.fullName}
            </Text>
            <Text lh={20} dark regular>
              Проживающего по адресу {data.address}
            </Text>
            <Text dark regular>
              Управляющей компании {data.companyName}
            </Text>
          </Header>

          <Text dark ta="center" lh={40}>
            Обращение
          </Text>
          <Content>
            <Text dark regular>
              {data.content}
            </Text>
          </Content>
          <Footer>
            <Text dark regular>
              С уважением, {data.fullName}
            </Text>
            <Text dark regular>
              {data.created_date}
            </Text>
          </Footer>
        </Paper>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex-grow: 1;
  padding: 10px;
`;

const Header = styled.View`
  align-self: flex-end;
  width: 50%;
`;

const Content = styled.View``;

const Footer = styled.View`
  padding: 40px 0 0 20px;
`;
export default ListDetailsPage;
