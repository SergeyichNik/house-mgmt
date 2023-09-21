import Stack from "expo-router/src/layouts/Stack";
import React from "react";

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Платежи",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};
