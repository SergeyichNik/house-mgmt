import { useGlobalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { Services } from "shared/constants";
import { PageHeader } from "shared/ui/PageHeader";
import { Paper } from "shared/ui/Paper";
import styled from "styled-components/native";

import { useApartments } from "../../../../entity/apartments";
import { CurrentAddress } from "../../../../entity/apartments/ui/CurrentAddress";
import {
  SelectedServices,
  ServicesSelect,
  useService,
} from "../../../../entity/services";
import { CreateRequest } from "../../../../feature/createRequest";

export default () => {
  const { service } = useGlobalSearchParams();
  const setCancelSelected = useService((state) => state.setCancelSelected);
  const fetchApartments = useApartments((state) => state.fetchApartments);
  const currentApartments = useApartments((state) => state.currentApartments);

  useEffect(() => {
    fetchApartments();
    return () => setCancelSelected();
  }, []);

  return (
    <Container>
      <PageHeader service={service as Services} />
      <Paper mt={10} mb={10}>
        <CurrentAddress withIcon={false} address={currentApartments} />
      </Paper>
      <Paper>
        <ServicesSelect service={service as Services} />
      </Paper>
      <SelectedServices />

      <CreateRequest service={service as Services} />
      {/*<Modal isOpen={isOpen} onClose={onClose}>*/}
      {/*  <Text dark>*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at atque*/}
      {/*    blanditiis ea eos excepturi, facere iusto molestiae natus neque omnis*/}
      {/*    perspiciatis quibusdam reprehenderit sapiente sequi tempora ut vel*/}
      {/*    veritatis?*/}
      {/*  </Text>*/}
      {/*  <Pressable>*/}
      {/*    <Text dark>Ok</Text>*/}
      {/*  </Pressable>*/}
      {/*</Modal>*/}
    </Container>
  );
};

const Container = styled.View`
  padding: 10px;
  flex-grow: 1;
`;
