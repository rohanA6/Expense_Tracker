import { useState } from "react";
import "./App.css";
// import ExpenseItems from "./Components/ExpenseItems";
import Expenses from "./Components/Expenses/Expenses";
// import ExpensesFilter from "./Components/Expenses/ExpensesFilter";
import NowExpense from "./Components/NewExpense/NewExpense";
import Footer from "./Components/UI/Footer";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(),
  },
];

function App() {

  const[expenses, setExpense] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) =>{
    setExpense((prevExpense)=>{
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NowExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      <Footer />
    </div>
  );
}

export default App;
