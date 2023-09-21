import { TouchableOpacity } from "react-native-gesture-handler";
import { getPrimaryColor } from "shared/theme";
import styled from "styled-components/native";

export interface ButtonProps extends TouchableOpacity {}

const Styled = styled.TouchableOpacity`
  margin: 10px 5px;
  height: 120px;
  color: #ffffff;
  border-radius: 20px;
  background-color: ${getPrimaryColor};
  font-size: 32px;
  justify-content: center;
  align-items: center;
`;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <Styled {...rest}>{children}</Styled>;
};
