import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Tabs from "expo-router/src/layouts/Tabs";
import React from "react";
import { Colors } from "shared/theme";

enum TabScreens {
  // APARTMENTS = "apartments",
  REQUESTS = "requests",
  SERVICES = "services",
  CONTACTS = "contacts",
  PAYMENT = "payment",
  APPEAL = "appeal",
  // PROFILE = "profile",
}

interface Tab {
  name: TabScreens;
  tabBarIcon?: ({
    color,
    size,
  }: {
    color: string;
    size: number;
  }) => JSX.Element;
  title?: string;
  href?: null;
}

const tabs: Tab[] = [
  {
    title: "Услуги",
    name: TabScreens.SERVICES,
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="home-repair-service" size={size} color={color} />
    ),
  },
  {
    title: "Заявки",
    name: TabScreens.REQUESTS,
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="my-library-books" size={size} color={color} />
    ),
  },
  {
    title: "Контакты",
    name: TabScreens.CONTACTS,
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="location-pin" size={size} color={color} />
    ),
  },
  // {
  //   title: "Помещения",
  //   name: TabScreens.APARTMENTS,
  //   tabBarIcon: ({ color, size }) => (
  //     <MaterialIcons name="location-city" size={size} color={color} />
  //   ),
  // },
  {
    title: "Платежи",
    name: TabScreens.PAYMENT,
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="payments" size={size} color={color} />
    ),
  },
  {
    title: "Обращения",
    name: TabScreens.APPEAL,
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons
        name="file-document-edit"
        size={size}
        color={color}
      />
    ),
  },
  // {
  //   title: "Профиль",
  //   name: TabScreens.PROFILE,
  //   tabBarIcon: ({ color, size }) => (
  //     <MaterialIcons name="person" size={size} color={color} />
  //   ),
  // },
];

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        headerShown: false,
      }}
    >
      {tabs.map(({ name, tabBarIcon, title }) => {
        return (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              headerTitle: title,
              headerTitleAlign: "center",
              headerShadowVisible: false,
              tabBarIcon,
              title,
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default TabsLayout;
