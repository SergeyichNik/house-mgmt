import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ActivityIndicator, PressableProps } from "react-native";
import { Colors } from "shared/theme";
import styled from "styled-components/native";

interface ButtonSizes {
  large?: boolean;
  medium?: boolean;
  small?: boolean;
}

interface ButtonColors {
  primary?: boolean;
  green?: boolean;
  secondary?: boolean;
  warn?: boolean;
  danger?: boolean;
}

export interface ConfirmButtonProps
  extends PressableProps,
    ButtonSizes,
    ButtonColors {
  icon?: string;
  mt?: number;
  outlined?: boolean;
  disabled?: boolean;
  withDelay?: boolean;
  delay?: number;
}

export const ConfirmButton = ({
  children,
  icon,
  outlined,
  warn,
  green,
  disabled,
  withDelay,
  delay = 1500,
  onPress,
  ...rest
}: ConfirmButtonProps) => {
  const [isLoad, setIsLoad] = useState(false);

  const onPressHandle = (e) => {
    if (withDelay) {
      setIsLoad(true);
      const id = setTimeout(() => {
        onPress?.(e);
        setIsLoad(false);
        clearTimeout(id);
      }, delay);
    } else {
      onPress?.(e);
    }
  };

  return (
    <Styled
      {...rest}
      onPress={onPressHandle}
      warn={warn}
      green={green}
      outlined={outlined}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {icon && (
        <Icon>
          <MaterialCommunityIcons name={icon} size={18} color="white" />
        </Icon>
      )}
      <Label disabled={disabled} warn={warn} green={green} outlined={outlined}>
        {isLoad ? <ActivityIndicator color="white" /> : <>{children}</>}
      </Label>
    </Styled>
  );
};

const Icon = styled.View`
  width: 26px;
  margin-right: 10px;
  height: 26px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Label = styled.Text`
  font-size: 14px;
  ${({ outlined, warn, green }) => {
    const getStyle = (color) => {
      return `
      color: ${outlined ? color : Colors.WHITE};
      `;
    };
    switch (true) {
      case warn:
        return getStyle(Colors.RED);
      case green:
        return getStyle(Colors.GREEN);
      default:
        return getStyle(Colors.PRIMARY);
    }
  }};
`;

// ${({ disabled }) => (disabled ? `color: ${Colors.GRAY}` : "")};
const Styled = styled.TouchableOpacity`
  flex-direction: row;
  ${({ mt }) => (mt ? `margin-top: ${mt}px;` : "")};
  padding: 10px;
  border-radius: 14px;
  align-items: center;
  height: 40px;
  justify-content: center;
  ${({ warn, green, outlined }: ButtonColors) => {
    const getStyle = (color) => {
      return `
       ${outlined ? "" : `background-color: ${color}`};
      ${outlined ? `border: 1px solid ${color}` : ""}
      `;
    };
    switch (true) {
      case green:
        return getStyle(Colors.GREEN);
      case warn:
        return getStyle(Colors.RED);
      default:
        return getStyle(Colors.PRIMARY);
    }
  }};
  ${({ medium, small }: ButtonSizes) => {
    switch (true) {
      case medium:
        return `
         width: 120px;
           `;
      case small:
        return `
        width: fit-content;
        padding: 0 15px;
        `;
      default:
        return `
         width: 100%;
           `;
    }
  }};
  ${({ disabled }) =>
    disabled ? `background-color: ${Colors.SECONDARY}` : ""};
`;
