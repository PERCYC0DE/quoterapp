import React, { Fragment } from "react";
import { TRADES, YEARS, PLANS } from "../constants";
import useQuoter from "../hooks/useQuoter";
import Error from "./Error";

const Form = () => {
  const { data, handleChangeData, error, setError, quoteInsurance } =
    useQuoter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    quoteInsurance();
  };

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="trade"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeData(e)}
            value={data.trade}
          >
            <option value="">-- Selecciona Marca --</option>

            {TRADES.map((trade) => (
              <option key={trade.id} value={trade.id}>
                {trade.name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeData(e)}
            value={data.year}
          >
            <option value="">-- Selecciona Año --</option>

            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.name}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeData(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Form;
