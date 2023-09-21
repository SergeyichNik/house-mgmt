import { useEffect } from "react";
import { LoaderContainer } from "shared/ui/LoaderContainer";
import styled from "styled-components/native";

import {
  FilterButtons,
  RequestListItem,
  useRequests,
} from "../../../entity/requests";

export default () => {
  const fetchRequests = useRequests((state) => state.fetchRequests);
  const isFetching = useRequests((state) => state.isFetching);
  const data = useRequests((state) =>
    state.data.filter(
      ({ status }) => state.filter === "all" || state.filter === status,
    ),
  );

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <LoaderContainer isFetching={isFetching}>
      <Container>
        <FilterButtons />
        <Scroll>
          {data.map(
            ({ id, status, serviceType, created_at_time, created_at_date }) => {
              return (
                <RequestListItem
                  date={created_at_date}
                  time={created_at_time}
                  service={serviceType}
                  key={id}
                  requestID={id}
                  status={status}
                />
              );
            },
          )}
        </Scroll>
      </Container>
    </LoaderContainer>
  );
};

const Container = styled.View`
  flex-grow: 1;
`;

const Scroll = styled.ScrollView`
  padding: 0 10px;
  flex-grow: 1;
  height: 100px;
`;
