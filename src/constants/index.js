export const TRADES = [
  { id: 1, name: "Europe" },
  { id: 2, name: "USA" },
  { id: 3, name: "Asia" },
];

const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(
  new Array(20),
  (valor, index) => YEARMAX - index
);

export const PLANS = [
  { id: 1, name: "Basic" },
  { id: 2, name: "Completed" },
];
