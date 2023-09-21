export enum PaymentTabs {
  VARIANTS = "variants",
  RECEIPTS = "receipts",
  HISTORY = "history",
}

export enum PaymentVariants {
  // HEATING = "heating",
  COLD_WATER = "coldWater",
  HOT_WATER = "hotWater",
  GAS = "gas",
  // SOLID_WASTE = "solidWaste",
}

export const paymentsVariant: PaymentVariants[] = [
  PaymentVariants.COLD_WATER,
  PaymentVariants.HOT_WATER,
  // PaymentVariants.HEATING,
  PaymentVariants.GAS,
  // PaymentVariants.SOLID_WASTE,
];

export const variantTitles: Record<PaymentVariants, string> = {
  [PaymentVariants.COLD_WATER]: "Холодное водоснабжение",
  [PaymentVariants.HOT_WATER]: "Горячее водоснабжение",
  // [PaymentVariants.HEATING]: "Отопление",
  // [PaymentVariants.SOLID_WASTE]: "Твёрдые отходы",
  [PaymentVariants.GAS]: "Газоснабжение",
};
