import React from "react";

// Components
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

// StyleSheet
import "./App.css";

// Reducer (Global State)
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

function App() {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </StateProvider>
  );
}

export default App;
