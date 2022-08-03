import { useContext } from "react";
import QuoterContext from "../context/QuoteProvider";

const useQuoter = () => {
  return useContext(QuoterContext);
};

export default useQuoter;
