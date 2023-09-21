import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactElement } from "react";
import { Services } from "shared/constants";

export const ServiceIcons: Record<
  Services,
  (size: number, color: string) => ReactElement
> = {
  [Services.PLUMBER]: (size: number, color: string) => (
    <FontAwesome5 name="faucet" size={size} color={color} />
  ),
  [Services.ELECTRICIAN]: (size: number, color: string) => (
    <FontAwesome5 name="plug" size={size} color={color} />
  ),
  [Services.RENOVATION]: (size: number, color: string) => (
    <FontAwesome5 name="paint-roller" size={size} color={color} />
  ),
  [Services.CLEANING]: (size: number, color: string) => (
    <FontAwesome5 name="air-freshener" size={size} color={color} />
  ),
  [Services.COUNTER]: (size: number, color: string) => (
    <MaterialCommunityIcons name="counter" size={size} color={color} />
  ),
  [Services.APPLIANCES]: (size: number, color: string) => (
    <MaterialCommunityIcons name="washing-machine" size={size} color={color} />
  ),
};
