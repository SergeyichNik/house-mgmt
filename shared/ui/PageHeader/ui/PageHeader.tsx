import { Services } from "shared/constants";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import {
  ServiceIcons,
  ServicesColors,
  ServiceTitles,
} from "../../../../entity/services";

export interface PageHeaderProps {
  service: Services;
  small?: boolean;
  mt?: number;
  mb?: number;
}

export const PageHeader = ({ service, small }: PageHeaderProps) => {
  return (
    <Container small={small} color={ServicesColors[service]}>
      <IconContainer small={small}>
        {ServiceIcons[service]?.(small ? 10 : 20, "white")}
      </IconContainer>
      <Text regular={!!small} md={!small}>
        {ServiceTitles[service]}
      </Text>
    </Container>
  );
};

const Container = styled.View`
  ${({ mt }) => (mt ? `margin-top: ${mt}px;` : "")};
  ${({ mb }) => (mb ? `margin-bottom: ${mb}px;` : "")};
  align-items: center;
  padding: ${({ small }) => (small ? "5px 10px 5px 5px" : "0 10px")};
  flex-direction: row;
  height: ${({ small }) => (small ? "30px" : "60px")};
  ${({ color }) => {
    return color ? `background-color: ${color};` : "";
  }};
  border-radius: ${({ small }) => (small ? "10px" : "20px")};
`;

const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: ${({ small }) => (small ? "5px" : "20px")};
  width: ${({ small }) => (small ? "20px" : "40px")};
  aspect-ratio: 1;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.5);
`;
