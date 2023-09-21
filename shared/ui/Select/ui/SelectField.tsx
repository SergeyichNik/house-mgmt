import { AntDesign } from "@expo/vector-icons";
import { Borders, Colors } from "shared/theme";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

export interface SelectFieldProps {
  onOpen: () => void;
  placeholder: string | undefined;
}

export const SelectField = ({ onOpen, placeholder }: SelectFieldProps) => {
  return (
    <Touchable onPress={onOpen} activeOpacity={0.9} underlayColor="#838383">
      <Field>
        {placeholder && (
          <Placeholder regular gray>
            {placeholder}
          </Placeholder>
        )}
        <AntDesign name="right" size={14} color={Colors.GRAY} />
      </Field>
    </Touchable>
  );
};

const Field = styled.View`
  width: 100%;
  height: 36px;
  background-color: ${Colors.SECONDARY};
  border-radius: ${Borders.ELEMENTS};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const Placeholder = styled(Text)`
  line-height: 20px;
`;

const Touchable = styled.TouchableHighlight`
  width: 100%;
  height: 36px;
  background-color: ${Colors.SECONDARY};
  border-radius: ${Borders.ELEMENTS};
`;
