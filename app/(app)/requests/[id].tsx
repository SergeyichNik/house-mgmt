import { useGlobalSearchParams } from "expo-router";
import Stack from "expo-router/src/layouts/Stack";
import { ServiceRequestContainer } from "pages/serviceRequest/ui/ServiceRequestContainer";
import { useEffect } from "react";

import { useRequests } from "../../../entity/requests";

const RequestScreen = () => {
  const { id } = useGlobalSearchParams();

  const clearStore = useRequests((state) => state.clearStore);

  useEffect(() => {
    return () => {
      clearStore("selectedRequest", {});
    };
  }, []);
  return (
    <>
      <Stack.Screen
        options={{
          title: `Заявка номер: ${id}`,
          headerTitleAlign: "center",
        }}
      />
      <ServiceRequestContainer />
    </>
  );
};

export default RequestScreen;
