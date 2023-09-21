import { ReactElement } from "react";
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
}

const size = 30;
const color = "#fff";

export const buttonsConfig: ServiceButton[] = [
  {
    href: ServicePaths.PLUMBER,
    name: ServiceTitles.plumber,
    color: ServicesColors.plumber,
    iconImage: ServiceIcons.plumber(size, color),
  },
  {
    href: ServicePaths.ELECTRICIAN,
    name: ServiceTitles.electrician,
    color: ServicesColors.electrician,
    iconImage: ServiceIcons.electrician(size, color),
  },
  {
    href: ServicePaths.RENOVATION,
    name: ServiceTitles.renovation,
    color: ServicesColors.renovation,
    iconImage: ServiceIcons.renovation(size, color),
  },
  {
    href: ServicePaths.CLEANING,
    name: ServiceTitles.cleaning,
    color: ServicesColors.cleaning,
    iconImage: ServiceIcons.cleaning(size, color),
  },
  {
    href: ServicePaths.COUNTER,
    name: ServiceTitles.counter,
    color: ServicesColors.counter,
    iconImage: ServiceIcons.counter(size, color),
  },
  {
    href: ServicePaths.APPLIANCES,
    name: ServiceTitles.appliances,
    color: ServicesColors.appliances,
    iconImage: ServiceIcons.appliances(size, color),
  },
];
