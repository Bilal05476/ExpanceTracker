import React from "react";
import { useStateValue } from "../StateProvider";

export const Balance = () => {
  const [{ transactions }] = useStateValue();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>Rs {total}</h1>
    </div>
  );
};
