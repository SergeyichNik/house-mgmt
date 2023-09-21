import { ReactElement } from "react";

import { PaymentTabs } from "../../../config/constants";
import { PaymentsHistory } from "../../PaymentsHistory";
import { PaymentsReceipt } from "../../PaymentsReceipt";
import { PaymentsVariant } from "../../PaymentsVariant";

export interface MapComponentProps {
  component: PaymentTabs;
}

const componentKit: Record<PaymentTabs, () => ReactElement> = {
  [PaymentTabs.VARIANTS]: () => <PaymentsVariant />,
  [PaymentTabs.RECEIPTS]: () => <PaymentsReceipt />,
  [PaymentTabs.HISTORY]: () => <PaymentsHistory />,
};

export const MapComponent = ({ component }: MapComponentProps) => {
  return componentKit[component]();
};
