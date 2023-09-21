import { Borders, Colors } from "shared/theme";
import styled from "styled-components/native";

export interface PaperProps {
  fg?: number;
  mt?: number;
  mb?: number;
  pt?: number;
  pb?: number;
  row?: boolean;
  ai?: "center" | "flex-end";
  jc?: "space-between" | "center";
  primary?: boolean;
  br?: [number, number, number, number] | [number, number] | number;
}

const Container = styled.View`
  padding: 15px;
  ${({ fg }) => (fg ? `flex-grow: ${fg};` : "")};
  ${({ row }) => (row ? `flex-direction: row;` : "")}
  ${({ mt }) => (mt ? `margin-top: ${mt}px;` : "")};
  ${({ mb }) => (mb ? `margin-bottom: ${mb}px;` : "")};
  ${({ pt }) => (pt || pt === 0 ? `padding-top: ${pt}px;` : "")};
  ${({ pb }) => (pb || pb === 0 ? `padding-bottom: ${pb}px;` : "")};
  ${({ ai }) => (ai ? `align-items: ${ai};` : "")};
  ${({ jc }) => (jc ? `justify-content: ${jc};` : "")};
  background-color: ${({ primary }) =>
    primary ? Colors.PRIMARY : Colors.WHITE};
  border-radius: ${Borders.FIRST_LEVEL};
`;

export const Paper = ({ children, ...rest }: PaperProps) => {
  return <Container {...rest}>{children}</Container>;
};
