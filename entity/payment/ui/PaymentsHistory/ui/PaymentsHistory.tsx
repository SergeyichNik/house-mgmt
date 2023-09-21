import { getPrice } from "shared/lib/getPrice";
import { Borders, Colors } from "shared/theme";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import { variantTitles } from "../../../config/constants";
import { usePayments } from "../../../model/store";

export interface PaymentsHistoryProps {}

export const PaymentsHistory = ({}: PaymentsHistoryProps) => {
  const paymentReceiptList = usePayments((state) =>
    state.paymentReceiptList.filter((el) => el.isPaid),
  );
  return (
    <Container>
      {paymentReceiptList.length === 0 && <Text gray>Пока ничего...</Text>}
      {paymentReceiptList.map(
        ({ variant, amount, paid_date, id, paid_time }) => {
          return (
            <Variant
              activeOpacity={0.9}
              underlayColor={Colors.SECONDARY}
              onPress={() => {}}
              key={id}
            >
              <ItemContent>
                <ItemHeader>
                  <Text lh={20} dark>
                    Платёжная квитанция
                  </Text>
                  <Text lh={20} regular dark>
                    Статус: Оплачена
                  </Text>
                </ItemHeader>
                <Text lh={20} regular dark>
                  {variantTitles[variant]}
                </Text>
                <Text lh={20} dark>
                  Сумма к оплате: {getPrice(amount)}
                </Text>
                <Text lh={20} regular dark>
                  Дата оплаты: {paid_date}
                </Text>
                <Text lh={20} regular dark>
                  Время оплаты: {paid_time}
                </Text>
              </ItemContent>
            </Variant>
          );
        },
      )}
    </Container>
  );
};

const Container = styled.ScrollView``;

const Variant = styled.View`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${Colors.GRAY};

  border-radius: ${Borders.ELEMENTS};
`;

const ItemContent = styled.View`
  justify-content: center;
`;

const ItemHeader = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;
