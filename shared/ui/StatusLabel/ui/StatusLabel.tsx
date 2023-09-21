import { ServiceRequestStatus } from "shared/api";
import { FontSizeProp } from "shared/theme";
import styled from "styled-components/native";

import { statusColors, StatusName } from "../config/constants";

export interface StatusLabelProps extends FontSizeProp {
  status: ServiceRequestStatus;
}

export const StatusLabel = ({ status }: StatusLabelProps) => {
  const color = statusColors[status];
  return (
    <StatusBadge fadeColor={color?.fade} color={color?.full}>
      <Label color={color?.full}>{StatusName[status]}</Label>
    </StatusBadge>
  );
};

const StatusBadge = styled.View`
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 80px;
  background-color: ${({ fadeColor }) => fadeColor};
  border: 1px solid ${({ color }) => color};
`;

const Label = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${({ color }) => color};
`;
