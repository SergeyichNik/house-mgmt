import Stack from "expo-router/src/layouts/Stack";
import React from "react";

const ListLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Обращения",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          headerTitle: "Создание обращения",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default ListLayout;
