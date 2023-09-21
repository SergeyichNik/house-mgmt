import { buttonsConfig } from "pages/services/config/buttonsConfig";
import React from "react";
import { LabelButton } from "shared/ui/LabelButton";
import styled from "styled-components/native";

export interface ServicesButtonsGroupProps {}

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ServicesButtonsGroup = ({}: ServicesButtonsGroupProps) => {
  return (
    <>
      <Container>
        {buttonsConfig.map(({ margin, href, color, name, iconImage }) => {
          return (
            <LabelButton
              key={href}
              margin={margin}
              name={name}
              href={href}
              iconImage={iconImage}
              color={color}
            />
          );
        })}
      </Container>
    </>
  );
};
