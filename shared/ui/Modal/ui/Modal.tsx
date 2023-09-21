import { Pressable } from "react-native";
import { Paper } from "shared/ui/Paper";
import styled from "styled-components/native";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => object;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <Container visible={isOpen} transparent>
      <SafeArea>
        <UnderLayer onPress={onClose}>
          <Pressable>
            <Paper>{children}</Paper>
          </Pressable>
        </UnderLayer>
      </SafeArea>
    </Container>
  );
};

const Container = styled.Modal``;

const SafeArea = styled.SafeAreaView`
  flex-grow: 1;
`;

const UnderLayer = styled.Pressable`
  flex-grow: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: rgba(5, 5, 5, 0.69);
`;
