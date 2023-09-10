import React from "react";

export const Transaction = ({ transaction, dispatch }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign} Rs {Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => {
          dispatch({
            type: "DELETE_TRANSACTION",
            payload: transaction.id,
          });
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
