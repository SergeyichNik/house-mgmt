import { AntDesign } from "@expo/vector-icons";
import { Colors } from "shared/theme";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import { useService } from "../../../model/store";

export interface SelectedItemProps {
  name: string;
  id: number;
  amount: number;
  removable?: boolean;
}

export const SelectedItem = ({
  name,
  amount,
  id,
  removable = true,
}: SelectedItemProps) => {
  const setToggleSelected = useService((state) => state.setToggleSelected);

  const onDeselect = () => {
    setToggleSelected(id);
  };
  return (
    <Container>
      <ServiceName removable={removable} dark regular>
        {name}
      </ServiceName>
      <ServiceAmount regular gray removable={removable}>
        {amount}₽
      </ServiceAmount>
      {removable && (
        <CancelSelection
          underlayColor={Colors.SECONDARY}
          activeOpacity={0.9}
          onPress={onDeselect}
        >
          <AntDesign name="delete" size={20} color={Colors.RED} />
        </CancelSelection>
      )}
    </Container>
  );
};

const Container = styled.View`
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  border-bottom-color: ${Colors.SECONDARY};
  border-bottom-width: 1px;
`;

const ServiceName = styled(Text)`
  width: ${({ removable }) => (removable ? "70%" : "85%")};
`;

const ServiceAmount = styled(Text)`
  padding-left: 10px;
  width: ${({ removable }) => (removable ? "80px" : "fit-content")};
`;

const CancelSelection = styled.TouchableHighlight`
  margin: 0 0 0 auto;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
