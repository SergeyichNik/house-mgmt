import { getDate } from "shared/lib/getDate";
import { getID } from "shared/lib/getID";
import { getTime } from "shared/lib/getTime";
import { DefaultSchema } from "shared/types";
import { create } from "zustand";

import { PaymentVariants } from "../config/constants";

interface PaymentReceipt {
  variant: PaymentVariants;
  amount: number;
  isPaid: boolean;
  id: number;
  paid_date?: string;
  paid_time?: string;
}

interface PaymentsSchema extends DefaultSchema<any> {
  paymentReceiptList: PaymentReceipt[];
  createPaymentReceipt: () => void;
  setIsPaid: (id: number) => void;
  currentVariant: PaymentVariants | null;
  setCurrentVariant: (variant: PaymentsSchema["currentVariant"]) => void;
  currentValue: string;
  changeCurrentValue: (value: string) => void;
}

export const usePayments = create<PaymentsSchema>((set) => {
  return {
    currentVariant: null,
    paymentReceiptList: [],
    setIsPaid: (id) => {
      set(({ paymentReceiptList }) => {
        return {
          paymentReceiptList: paymentReceiptList.map((el) =>
            el.id === id
              ? {
                  ...el,
                  isPaid: true,
                  paid_date: getDate(),
                  paid_time: getTime(),
                }
              : el,
          ),
        };
      });
    },
    createPaymentReceipt: () => {
      set(({ currentVariant, currentValue, paymentReceiptList }) => {
        const receiptModel: PaymentReceipt = {
          variant: currentVariant as PaymentVariants,
          amount: Number(currentValue) * 100.05,
          isPaid: false,
          id: getID(),
        };
        return {
          paymentReceiptList: [receiptModel, ...paymentReceiptList],
          currentValue: "",
          currentVariant: null,
        };
      });
    },
    setCurrentVariant: (variant) => {
      set({ currentVariant: variant });
    },
    currentValue: "",
    changeCurrentValue: (value) => {
      set({ currentValue: value });
    },
  };
});
