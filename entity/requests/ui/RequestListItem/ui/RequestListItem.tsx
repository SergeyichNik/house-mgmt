import { Link } from "expo-router";
import { ServiceRequestStatus } from "shared/api";
import { Services } from "shared/constants";
import { Borders, Colors } from "shared/theme";
import { PageHeader } from "shared/ui/PageHeader";
import { Paper } from "shared/ui/Paper";
import { StatusLabel } from "shared/ui/StatusLabel";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import { useRequests } from "../../../model/store";

export interface RequestListItemProps {
  status: ServiceRequestStatus;
  requestID: number;
  service: Services;
  date: string;
  time: string;
}

export const RequestListItem = ({
  status,
  service,
  requestID,
  date,
  time,
}: RequestListItemProps) => {
  const setSelectedRequest = useRequests((state) => state.setSelectedRequest);

  return (
    <Link href={`/requests/${requestID}`} asChild>
      <Container
        onPress={() => setSelectedRequest(requestID.toString())}
        underlayColor={Colors.GRAY}
        activeOpacity={0.9}
      >
        <Paper>
          <HContainer>
            <PageHeader small service={service} />
            <StatusLabel status={status} />
          </HContainer>
          <HContainer mt={10}>
            <Text dark>Заявка № {requestID}</Text>
            <Text dark>
              Дата: {date}, {time}
            </Text>
          </HContainer>
        </Paper>
      </Container>
    </Link>
  );
};

const Container = styled.TouchableHighlight`
  margin-top: 10px;
  border-radius: ${Borders.FIRST_LEVEL};
`;

const HContainer = styled.View`
  ${({ mt }) => (mt ? `margin-top: ${mt}px;` : "")};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
