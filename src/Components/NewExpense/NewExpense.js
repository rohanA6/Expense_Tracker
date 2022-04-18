import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NowExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

    const onSaveDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id : Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const editingHandler = () =>{
      setIsEditing(true);
    };

    const stopEditingHandler = () =>{
      setIsEditing(false);
    };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveData = {onSaveDataHandler}  onCancle = {stopEditingHandler}/>}
    </div>
  );
};

export default NowExpense;
