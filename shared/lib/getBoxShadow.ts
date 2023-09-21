import { Platform } from "react-native";
import { Colors } from "shared/theme";

export const getBoxShadow = (
  xOffset = -2,
  yOffset = 4,
  shadowColorIos = Colors.GRAY,
  shadowOpacity = 0.2,
  shadowRadius = 3,
  elevation = 4,
  shadowColorAndroid = Colors.GRAY,
) => {
  if (Platform.OS === "ios") {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};
