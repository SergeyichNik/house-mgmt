import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Borders, Colors } from "shared/theme";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

export interface CurrentAddressProps {
  address: string;
  withIcon?: boolean;
}

export const CurrentAddress = ({
  address,
  withIcon = true,
}: CurrentAddressProps) => {
  return (
    <Container>
      <FontAwesome5 name="home" size={24} color={Colors.PRIMARY} />
      <AddressText dark>{address}</AddressText>

      {withIcon && <AntDesign name="delete" size={20} color={Colors.RED} />}
    </Container>
  );
};

const Container = styled.View`
  border: 1px solid ${Colors.SECONDARY};
  align-items: center;
  border-radius: ${Borders.SECOND_LEVEL};
  flex-direction: row;
  padding: 10px;
`;

const AddressText = styled(Text)`
  margin-left: 10px;
  margin-right: auto;
`;
