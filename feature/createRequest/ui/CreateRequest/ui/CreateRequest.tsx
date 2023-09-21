import { useRouter } from "expo-router";
import React from "react";
import { Services } from "shared/constants";
import { ConfirmButton } from "shared/ui/ConfirmButton";

import { useRequests } from "../../../../../entity/requests";
import { useService } from "../../../../../entity/services";

export interface CreateRequestProps {
  service: Services;
}

export const CreateRequest = ({ service }: CreateRequestProps) => {
  const router = useRouter();
  const createRequest = useRequests((state) => state.createRequest);
  const setCancelSelected = useService((state) => state.setCancelSelected);
  const orderList = useService(
    (state) => state.data?.filter((el) => el.isSelected),
  );

  const onCreateRequest = () => {
    createRequest(orderList, service);
    router.push("/services");
    setCancelSelected();
  };

  return (
    <ConfirmButton
      withDelay
      disabled={!orderList?.length}
      onPress={onCreateRequest}
      large
    >
      Оформить заявку
    </ConfirmButton>
  );
};
