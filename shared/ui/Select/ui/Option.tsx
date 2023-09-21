import { Colors } from "shared/theme";
import { Checkbox } from "shared/ui/Checkbox";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

export const Option = ({ option, onSelect, isChecked }) => {
  const onHandleSelect = () => {
    onSelect(option);
  };
  return (
    <Container
      underlayColor={Colors.SECONDARY}
      activeOpacity={0.9}
      onPress={onHandleSelect}
    >
      <OptionChild>
        <OptionDescription regular dark>
          {option.name}
        </OptionDescription>
        <Checkbox isChecked={isChecked} />
      </OptionChild>
    </Container>
  );
};

const Container = styled.TouchableHighlight`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.SECONDARY};
`;

const OptionDescription = styled(Text)`
  width: 90%;
`;

const OptionChild = styled.View`
  padding: 15px 10px 15px 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
`;
