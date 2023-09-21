import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Borders } from "shared/theme";
import { ConfirmButton } from "shared/ui/ConfirmButton";
import { Paper } from "shared/ui/Paper";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import { useAppeal } from "../../../entity/appeal";

const ListScreen = () => {
  const router = useRouter();
  const fetchAppeals = useAppeal((state) => state.fetchAppeals);
  const data = useAppeal((state) => state.data);
  const selectAppeal = useAppeal((state) => state.selectAppeal);

  useEffect(() => {
    fetchAppeals();
  }, []);

  const goToCreateNewAppeal = () => {
    router.push("/appeal/create");
  };

  return (
    <Container>
      <Paper jc="space-between" ai="center" row>
        <Header>
          <Icon>
            <FontAwesome5 name="history" size={20} color="black" />
          </Icon>
          <Text dark>История обращений</Text>
        </Header>
      </Paper>
      <Content>
        <Scroll>
          {data.map(({ created_date, id, title }) => {
            return (
              <AppealItem
                key={id}
                activeOpacity={0.9}
                onPress={() => {
                  selectAppeal(id);
                  router.push(`/appeal/${id}`);
                }}
              >
                <Paper>
                  <Text dark>Обращение от {created_date}</Text>
                  <Text lh={20} gray>
                    Тема обращения:
                  </Text>
                  <Text regular dark>
                    {title}
                  </Text>
                </Paper>
              </AppealItem>
            );
          })}
        </Scroll>
      </Content>
      <Paper>
        <ConfirmButton onPress={goToCreateNewAppeal} small>
          Новое обращение
        </ConfirmButton>
      </Paper>
    </Container>
  );
};

const Container = styled.View`
  padding: 10px;
  flex-grow: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  flex-grow: 1;
`;

const Scroll = styled.ScrollView`
  height: 100px;
  flex-grow: 1;
`;

const Icon = styled.View`
  margin-right: 5px;
`;

const AppealItem = styled.TouchableHighlight`
  margin-top: 10px;
  border-radius: ${Borders.FIRST_LEVEL};
`;

export default ListScreen;
