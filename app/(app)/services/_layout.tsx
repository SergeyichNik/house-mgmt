import { Stack } from "expo-router";
import React from "react";

const ServicesLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Услуги",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="(create-request)"
        options={{ title: "Оформление заявки", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};

export default ServicesLayout;
