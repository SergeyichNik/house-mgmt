import { useState } from "react";
import { Colors } from "shared/theme";
import { Paper } from "shared/ui/Paper";
import { Tabs } from "shared/ui/Tabs";
import { ITab } from "shared/ui/Tabs/ui/Tabs";
import { Text } from "shared/ui/Text";
import styled from "styled-components/native";

import {
  MapComponent,
  PaymentTabs,
  usePayments,
} from "../../../entity/payment";

const ReceiptCount = () => {
  const count = usePayments((state) =>
    state.paymentReceiptList.filter((el) => !el.isPaid),
  );
  if (!count.length) return null;

  return (
    <Circle>
      <Text regular>{count.length}</Text>
    </Circle>
  );
};

const Circle = styled.View`
  width: 18px;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  border-radius: 10px;
  background-color: ${Colors.PRIMARY};
`;

const tabs: ITab[] = [
  { key: PaymentTabs.VARIANTS, label: "Показания" },
  { key: PaymentTabs.RECEIPTS, label: "Платежи", child: <ReceiptCount /> },
  { key: PaymentTabs.HISTORY, label: "История" },
];

export default () => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  return (
    <Container>
      <Tabs tabs={tabs} active={activeTab} onPress={setActiveTab} />
      <ContentContainer br={[0, 0, 20, 20]}>
        <MapComponent component={activeTab as PaymentTabs} />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-grow: 1;
  padding: 10px;
`;

const ContentContainer = styled(Paper)`
  flex-grow: 1;
  border-radius: 0 0 20px 20px;
`;
