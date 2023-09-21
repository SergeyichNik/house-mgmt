import { Colors } from "shared/theme";
import { Paper } from "shared/ui/Paper";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import { useService } from "../../../model/store";
import { SelectedItem } from "../../SelectedItem";

export interface SelectedServicesProps {}

export const SelectedServices = ({}: SelectedServicesProps) => {
  const filteredData = useService(
    (state) => state.data?.filter((el) => el.isSelected),
  );

  const totalAmount = filteredData?.reduce(
    (acc, { amount }) => acc + amount,
    0,
  );

  return (
    <PaperContainer>
      <HeaderContainer>
        <ServiceName gray regular>
          Наименование
        </ServiceName>
        <ServiceAmount gray regular>
          Стоимость
        </ServiceAmount>
      </HeaderContainer>
      <Scroll>
        {filteredData?.map(({ id, amount, name }) => (
          <SelectedItem name={name} amount={amount} id={id} key={id} />
        ))}
      </Scroll>
      <FooterContainer>
        <TotalAmount gray regular>
          Итого:
        </TotalAmount>
        <ServiceAmount dark regular>
          {totalAmount}₽
        </ServiceAmount>
      </FooterContainer>
    </PaperContainer>
  );
};

const PaperContainer = styled(Paper)`
  margin: 10px 0;
  flex-grow: 1;
  height: 100px;
`;

const HeaderContainer = styled.View`
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  border-bottom-color: ${Colors.SECONDARY};
  border-bottom-width: 1px;
`;

const Scroll = styled.ScrollView``;

const ServiceName = styled(Text)`
  width: 70%;
`;

const ServiceAmount = styled(Text)`
  padding-left: 10px;
  flex-grow: 1;
  margin: 0 auto 0 0;
`;

const FooterContainer = styled.View`
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  border-top-color: ${Colors.SECONDARY};
  border-top-width: 1px;
`;

const TotalAmount = styled(Text)`
  width: 70%;
  text-align: right;
`;
