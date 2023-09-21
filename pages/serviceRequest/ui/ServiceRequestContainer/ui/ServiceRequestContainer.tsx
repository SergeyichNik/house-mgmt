import { ScrollView } from "react-native";
import { PageHeader } from "shared/ui/PageHeader";
import { Paper } from "shared/ui/Paper";
import { StatusLabel } from "shared/ui/StatusLabel";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import { useRequests } from "../../../../../entity/requests";
import { SelectedItem } from "../../../../../entity/services/ui/SelectedItem";
import { ServiceRequestChild } from "../../ServiceRequestChild";

export interface ServiceRequestContainerProps {}

export const ServiceRequestContainer = ({}: ServiceRequestContainerProps) => {
  const data = useRequests((state) => state.selectedRequest);

  const totalAmount = data.orderList?.reduce(
    (sum, { amount }) => sum + amount,
    0,
  );

  return (
    <Container>
      <Paper>
        <HContainer spb mb={10}>
          <PageHeader small service={data.serviceType} />
          <StatusLabel status={data.status} />
        </HContainer>

        <HContainer mb={10}>
          <Text gray>Заявка №: </Text>
          <Text dark>{data.id}</Text>
        </HContainer>

        <HContainer mb={10}>
          <Text gray>Сумма: </Text>
          <Text dark>{totalAmount}₽</Text>
        </HContainer>

        <HContainer>
          <Text gray>Дата создания заявки: </Text>
          <Text dark>{data.created_at_date}</Text>
        </HContainer>

        <HContainer>
          <Text gray>Время создания заявки: </Text>
          <Text dark>{data.created_at_time}</Text>
        </HContainer>
      </Paper>
      <Paper mt={10}>
        <Text gray>Состав заявки:</Text>
        <ScrollView>
          {data.orderList?.map(({ id, amount, name }) => (
            <SelectedItem
              removable={false}
              name={name}
              amount={amount}
              id={id}
              key={id}
            />
          ))}
        </ScrollView>
      </Paper>

      <ServiceRequestChild data={data} />
    </Container>
  );
};

const Container = styled.View`
  padding: 10px 10px 0 10px;
`;

const HContainer = styled.View`
  align-items: center;
  ${({ mb }) => (mb ? `margin-bottom: ${mb}px;` : "")};
  ${({ spb }) => (spb ? "justify-content: space-between;" : "")};
  flex-direction: row;
`;
