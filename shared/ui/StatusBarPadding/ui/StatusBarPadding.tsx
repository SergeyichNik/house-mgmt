import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "shared/theme";
import styled from "styled-components/native";

interface ColorsProps {
  color: Colors;
  statusBarStyle: "dark" | "light" | "auto";
}
export interface StatusBarPaddingProps extends ColorsProps {}

const Container = styled.View`
  padding-top: ${({ paddingTop }) => `${paddingTop}px`};
  ${({ color }: Colors) => `background-color: ${color};`};
`;

export const StatusBarPadding = ({
  color,
  statusBarStyle = "auto",
}: StatusBarPaddingProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <StatusBar style={statusBarStyle} />
      <Container paddingTop={top} color={color} />
    </>
  );
};
