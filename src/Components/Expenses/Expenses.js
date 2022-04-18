import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpemseList from './ExpenseList';


const Expenses = (props) => {
  const [filerYear, setFilterYear] = useState("2022");

  const changeFilterHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filteredData = props.items.filter((expense) => {
    const date = new Date(expense.date);
    return date.getFullYear().toString()=== filerYear;
    
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        select={filerYear}
        onCahangeFilter={changeFilterHandler}
      />
      <ExpemseList items={filteredData}/>
    </Card>
  );
};

export default Expenses;
