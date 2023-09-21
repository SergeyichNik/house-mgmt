export function getPrice(amount: number): string {
  if (isNaN(amount)) {
    return "Некорректное число";
  }

  const rubles = Math.floor(amount);

  return rubles.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 2,
  });
}
