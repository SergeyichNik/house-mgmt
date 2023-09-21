import { AntDesign } from "@expo/vector-icons";
import { Modal, SafeAreaView } from "react-native";
import { Borders, Colors } from "shared/theme";
import { Paper } from "shared/ui/Paper";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

export interface DropdownContainerProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
  dropDownTitle: string | undefined;
}
export const DropdownContainer = ({
  isOpen,
  onClose,
  onCancel,
  dropDownTitle,
  children,
}: DropdownContainerProps) => {
  return (
    <Modal transparent visible={isOpen}>
      <SafeAreaView style={{ flex: 1 }}>
        <UnderLayer>
          <DropdownViewContainer>
            <DropdownPaper>
              <DropdownHeader>
                {dropDownTitle && (
                  <Text dark gray md>
                    {dropDownTitle}
                  </Text>
                )}
                <DropdownClose onPress={onClose}>
                  <AntDesign name="close" size={20} color={Colors.GRAY} />
                </DropdownClose>
              </DropdownHeader>
              <Scroll>{children}</Scroll>
              <DropdownFooter>
                <Button
                  underlayColor={Colors.SECONDARY}
                  activeOpacity={0.9}
                  onPress={onCancel}
                >
                  <Text dark regular>
                    Сбросить
                  </Text>
                </Button>
                <Button
                  underlayColor={Colors.SECONDARY}
                  activeOpacity={0.9}
                  onPress={onClose}
                >
                  <Text blue regular>
                    Принять
                  </Text>
                </Button>
              </DropdownFooter>
            </DropdownPaper>
          </DropdownViewContainer>
        </UnderLayer>
      </SafeAreaView>
    </Modal>
  );
};

const DropdownViewContainer = styled.View`
  flex-grow: 1;
`;

const UnderLayer = styled.View`
  padding: 10px;
  flex-grow: 1;
  background-color: rgba(34, 34, 34, 0.7);
`;

const DropdownPaper = styled(Paper)`
  padding: 0 15px;
  flex-grow: 1;
`;

const DropdownHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.SECONDARY};
`;

const DropdownClose = styled.Pressable`
  margin-left: auto;
  margin-right: 0;
`;

const Scroll = styled.ScrollView`
  height: 100px;
  flex-grow: 1;
`;

const DropdownFooter = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  border-top-width: 1px;
  border-top-color: ${Colors.SECONDARY};
`;

const Button = styled.TouchableHighlight`
  height: 40px;
  justify-content: center;
  padding: 0 10px;
  border-radius: ${Borders.ELEMENTS};
`;
