import { TextInputProps } from "react-native";
import { Borders, Colors } from "shared/theme";
import styled from "styled-components/native";

export interface InputProps extends TextInputProps {}

export const Input = (props: InputProps) => {
  return <Container {...props} />;
};

const Container = styled.TextInput`
  height: 36px;
  padding: 0 10px;
  background-color: ${Colors.SECONDARY};
  border-radius: ${Borders.ELEMENTS};
`;
