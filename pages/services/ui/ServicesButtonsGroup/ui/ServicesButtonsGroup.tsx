import { save } from "metro/src/shared/output/bundle";
import { buttonsConfig } from "pages/services/config/buttonsConfig";
import React, { useEffect } from "react";
import { LabelButton } from "shared/ui/LabelButton";
import styled from "styled-components/native";

import { useService } from "../../../../../entity/services";

export interface ServicesButtonsGroupProps {}

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ServicesButtonsGroup = ({}: ServicesButtonsGroupProps) => {
  const fetchServicesCount = useService((state) => state.fetchServicesCount);
  const serviceCount = useService((state) => state.servicesCount);

  useEffect(() => {
    fetchServicesCount();
  }, []);
  return (
    <>
      <Container>
        {buttonsConfig.map(({ margin, href, color, name, iconImage, key }) => {
          return (
            <LabelButton
              count={serviceCount[key]}
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
