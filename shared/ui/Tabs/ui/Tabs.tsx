import React from "react";
import { Text } from "react-native";
import { Colors } from "shared/theme";
import styled from "styled-components/native";

export interface ITab {
  key: string;
  label: string;
  child?: React.ReactNode;
}

export interface TabsProps {
  tabs: ITab[];
  active: string;
  onPress: (tab: string) => void;
}

export const Tabs = ({ tabs, active, onPress }: TabsProps) => {
  return (
    <Container>
      {tabs.map((tab, i) => {
        const first = i === 0 ? "first" : "";
        const last = i === tabs.length - 1 ? "last" : "";
        return (
          <Tab
            key={tab.key}
            active={active === tab.key}
            onPress={() => onPress(tab.key)}
            position={first || last}
          >
            <Content>
              <Text>{tab.label}</Text>
              {tab.child && <Child>{tab.child}</Child>}
            </Content>
          </Tab>
        );
      })}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

const Content = styled.View``;

const Child = styled.View`
  position: absolute;
  right: -25px;
`;

const Tab = styled.Pressable`
  height: 40px;
  ${({ position }) => {
    return `
    margin: ${
      {
        first: "0 2px 0 0",
        last: "0 0 0 2px",
        default: "0 2px",
      }[position || "default"]
    };
    `;
  }}
  background-color: ${({ active }) => (active ? Colors.WHITE : "#d2d0d0")};
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  flex-grow: 1;
`;
