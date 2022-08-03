export function getDiferenceYear(year) {
  return new Date().getFullYear() - year;
}

export function calculateTrade(trade) {
  let increment;

  switch (trade) {
    case "1":
      increment = 1.3;
      break;
    case "2":
      increment = 1.15;
      break;
    case "3":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
}

export function calculatePlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

export function formatMoney(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
