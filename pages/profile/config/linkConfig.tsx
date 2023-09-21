import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactElement } from "react";

export enum ProfileLinks {
  APARTMENTS = "apartments",
  REQUESTS = "requests",
  PASSES = "passes",
  PAYMENTS_HISTORY = "paymentHistory",
  PAYMENT_METHODS = "paymentMethods",
}

export const profileLinksTitles: Record<ProfileLinks, string> = {
  [ProfileLinks.APARTMENTS]: "Помещения",
  [ProfileLinks.REQUESTS]: "Заявки",
  [ProfileLinks.PASSES]: "Пропуска",
  [ProfileLinks.PAYMENTS_HISTORY]: "История платежей",
  [ProfileLinks.PAYMENT_METHODS]: "Способы оплаты",
};

export const profileMenuStackScreens: ProfileLinks[] = [
  ProfileLinks.REQUESTS,
  ProfileLinks.PASSES,
  ProfileLinks.PAYMENTS_HISTORY,
  ProfileLinks.PAYMENT_METHODS,
];

export interface ProfileLink {
  href: string;
  icon: (size: number, color: string) => ReactElement;
  title: string;
}

export const profileLinks: ProfileLink[] = [
  {
    title: profileLinksTitles[ProfileLinks.APARTMENTS],
    href: `/apartments`,
    icon: (size, color) => (
      <MaterialCommunityIcons
        name="home-city-outline"
        size={size}
        color={color}
      />
    ),
  },
  {
    title: profileLinksTitles[ProfileLinks.REQUESTS],
    href: "/profile/requests",
    icon: (size, color) => (
      <MaterialCommunityIcons
        name="file-document-outline"
        size={size}
        color={color}
      />
    ),
  },
  {
    title: profileLinksTitles[ProfileLinks.PASSES],
    href: "/profile/passes",
    icon: (size, color) => (
      <MaterialCommunityIcons
        name="smart-card-outline"
        size={size}
        color={color}
      />
    ),
  },
  {
    title: profileLinksTitles[ProfileLinks.PAYMENT_METHODS],
    href: "/profile/paymentMethods",
    icon: (size, color) => (
      <MaterialCommunityIcons
        name="credit-card-outline"
        size={size}
        color={color}
      />
    ),
  },
  {
    title: profileLinksTitles[ProfileLinks.PAYMENTS_HISTORY],
    href: "/profile/paymentHistory",
    icon: (size, color) => (
      <MaterialCommunityIcons
        name="credit-card-refresh-outline"
        size={size}
        color={color}
      />
    ),
  },
];
