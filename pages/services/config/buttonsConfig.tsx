import { ReactElement } from "react";
import { Services } from "shared/constants";
import { ServicePaths } from "shared/router";
import { Colors } from "shared/theme";

import {
  ServiceIcons,
  ServicesColors,
  ServiceTitles,
} from "../../../entity/services";

interface ServiceButton {
  name: string;
  margin?: [number, number, number, number];
  color: Colors;
  iconImage: ReactElement;
  href: ServicePaths;
  key: Services;
}

const size = 30;
const color = "#fff";

export const buttonsConfig: ServiceButton[] = [
  {
    href: ServicePaths.PLUMBER,
    name: ServiceTitles.plumber,
    color: ServicesColors.plumber,
    iconImage: ServiceIcons.plumber(size, color),
    key: Services.PLUMBER,
  },
  {
    href: ServicePaths.ELECTRICIAN,
    name: ServiceTitles.electrician,
    color: ServicesColors.electrician,
    iconImage: ServiceIcons.electrician(size, color),
    key: Services.ELECTRICIAN,
  },
  {
    href: ServicePaths.RENOVATION,
    name: ServiceTitles.renovation,
    color: ServicesColors.renovation,
    iconImage: ServiceIcons.renovation(size, color),
    key: Services.RENOVATION,
  },
  {
    href: ServicePaths.CLEANING,
    name: ServiceTitles.cleaning,
    color: ServicesColors.cleaning,
    iconImage: ServiceIcons.cleaning(size, color),
    key: Services.CLEANING,
  },
  {
    href: ServicePaths.COUNTER,
    name: ServiceTitles.counter,
    color: ServicesColors.counter,
    iconImage: ServiceIcons.counter(size, color),
    key: Services.COUNTER,
  },
  {
    href: ServicePaths.APPLIANCES,
    name: ServiceTitles.appliances,
    color: ServicesColors.appliances,
    iconImage: ServiceIcons.appliances(size, color),
    key: Services.APPLIANCES,
  },
];
