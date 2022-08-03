import { createContext, useState } from "react";
import {
  getDiferenceYear,
  calculateTrade,
  calculatePlan,
  formatMoney,
} from "../helpers";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const [data, setData] = useState({
    trade: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteInsurance = () => {
    // Una base
    let result = 2000;

    // Obtener diferencia de años
    const diference = getDiferenceYear(data.year);

    // Hay que restar el 3% por cada año
    result -= (diference * 3 * result) / 100;

    // Europeo 30%
    // Americano 15%
    // Asiatico 5%
    result *= calculateTrade(data.trade);

    // Básico 20%
    // Completo 50%
    result *= calculatePlan(data.plan);

    // Formatear Dinero
    result = formatMoney(result);

    setLoading(true);

    setTimeout(() => {
      setResult(result);
      setLoading(false);
    }, 3000);
  };

  return (
    <QuoteContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        quoteInsurance,
        result,
        loading,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteProvider };

export default QuoteContext;
