import { getPrice } from "shared/lib/getPrice";
import { Borders, Colors } from "shared/theme";
import { ConfirmButton } from "shared/ui/ConfirmButton";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import { variantTitles } from "../../../config/constants";
import { usePayments } from "../../../model/store";

export interface PaymentsReceiptProps {}

export const PaymentsReceipt = ({}: PaymentsReceiptProps) => {
  const paymentReceiptList = usePayments((state) =>
    state.paymentReceiptList.filter((el) => !el.isPaid),
  );
  const setIsPaid = usePayments((state) => state.setIsPaid);

  return (
    <Container>
      {paymentReceiptList.length === 0 && <Text gray>Пока ничего...</Text>}
      {paymentReceiptList.map(({ variant, amount, id }) => {
        return (
          <Variant
            activeOpacity={0.9}
            underlayColor={Colors.SECONDARY}
            onPress={() => {}}
            key={id}
          >
            <ItemContent>
              <ItemContent>
                <Text lh={20} dark>
                  Платёжная квитанция
                </Text>
                <Text lh={20} regular dark>
                  {variantTitles[variant]}
                </Text>
                <Text lh={20} dark>
                  Сумма к оплате: {getPrice(amount)}
                </Text>
              </ItemContent>
              <ItemContent>
                <ConfirmButton
                  withDelay
                  onPress={() => setIsPaid(id)}
                  mt={20}
                  small
                >
                  Оплатить
                </ConfirmButton>
              </ItemContent>
            </ItemContent>
          </Variant>
        );
      })}
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
