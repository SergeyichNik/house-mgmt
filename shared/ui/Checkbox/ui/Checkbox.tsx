import { AntDesign } from "@expo/vector-icons";
import { Colors } from "shared/theme";
import styled from "styled-components/native";

export interface CheckboxProps {
  isChecked: boolean;
}

export const Checkbox = ({ isChecked }: CheckboxProps) => {
  return (
    <Container isChecked={isChecked}>
      <AntDesign name="check" size={14} color="white" />
    </Container>
  );
};

const Container = styled.Pressable`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  background-color: ${({ isChecked }) =>
    isChecked ? Colors.GREEN : Colors.SECONDARY};
`;
