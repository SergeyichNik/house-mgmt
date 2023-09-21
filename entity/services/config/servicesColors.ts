import { Services } from "shared/constants";
import { Colors } from "shared/theme";

export const ServicesColors: Record<Services, Colors> = {
  [Services.PLUMBER]: Colors.BLUE,
  [Services.ELECTRICIAN]: Colors.RED,
  [Services.RENOVATION]: Colors.PURPLE,
  [Services.CLEANING]: Colors.GREEN,
  [Services.APPLIANCES]: Colors.ORANGE,
  [Services.COUNTER]: Colors.DEEP_BLUE,
};
