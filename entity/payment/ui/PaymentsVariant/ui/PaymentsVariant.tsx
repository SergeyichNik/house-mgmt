import { extractNumbersFromString } from "shared/lib/extractNumbers";
import { Borders, Colors } from "shared/theme";
import { ConfirmButton } from "shared/ui/ConfirmButton";
import { Input } from "shared/ui/Input";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import { paymentsVariant, variantTitles } from "../../../config/constants";
import { usePayments } from "../../../model/store";

export interface PaymentsVariantProps {}

export const PaymentsVariant = ({}: PaymentsVariantProps) => {
  const currentVariant = usePayments((state) => state.currentVariant);
  const setCurrentVariant = usePayments((state) => state.setCurrentVariant);
  const currentValue = usePayments((state) => state.currentValue);
  const changeCurrentValue = usePayments((state) => state.changeCurrentValue);
  const createPaymentReceipt = usePayments(
    (state) => state.createPaymentReceipt,
  );

  const onChange = (value) => {
    changeCurrentValue(extractNumbersFromString(value));
  };

  return (
    <Container>
      {currentVariant ? (
        <>
          <FormHeader>
            <Text dark>{variantTitles[currentVariant]}</Text>
            <ConfirmButton
              onPress={() => {
                setCurrentVariant(null);
                changeCurrentValue("");
              }}
              small
              outlined
              warn
            >
              Отмена
            </ConfirmButton>
          </FormHeader>
          <Input
            value={currentValue}
            onChangeText={onChange}
            inputMode="numeric"
            placeholder="Показания здесь..."
          />
          <ConfirmButton
            withDelay
            onPress={createPaymentReceipt}
            disabled={!currentValue}
            mt={20}
          >
            Отправить
          </ConfirmButton>
        </>
      ) : (
        <>
          <Text dark>Выберите категорию</Text>
          {paymentsVariant.map((variant) => {
            return (
              <Variant
                activeOpacity={0.9}
                underlayColor={Colors.SECONDARY}
                onPress={() => setCurrentVariant(variant)}
                key={variant}
              >
                <Text dark>{variantTitles[variant]}</Text>
              </Variant>
            );
          })}
        </>
      )}
    </Container>
  );
};

const Container = styled.View``;

const Variant = styled.TouchableHighlight`
  margin-top: 10px;
  justify-content: center;
  padding: 0 10px;
  border: 1px solid ${Colors.GRAY};
  height: 40px;
  border-radius: ${Borders.ELEMENTS};
`;

const FormHeader = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;
