import React, { useCallback, useMemo, useRef } from "react";
import useQuoter from "../hooks/useQuoter";
import { TRADES, PLANS } from "../constants";

const Result = () => {
  const { result, data } = useQuoter();
  const { trade, plan, year } = data;
  const yearRef = useRef(year);

  const [tradeName] = useCallback(
    TRADES.filter((m) => m.id === Number(trade)),
    [result]
  );
  const [planName] = useCallback(
    PLANS.filter((p) => p.id === Number(plan)),
    [result]
  );

  if (result === 0) return null;
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-2xl">Resumen</h2>
      <p className="my-2 ">
        <span className="font-bold">Marca: </span>
        {tradeName.name}
      </p>
      <p className="my-2 ">
        <span className="font-bold">Plan: </span>
        {planName.name}
      </p>
      <p className="my-2 ">
        <span className="font-bold">Año: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {result}
      </p>
    </div>
  );
};

export default Result;
