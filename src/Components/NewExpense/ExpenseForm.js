import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const[Title, setTitle] = useState('');
    const[Amount, setAmount] = useState('');
    const[Date, setDate] = useState('');

    const titleChangeHandler = (e) =>{
        setTitle(e.target.value);
    };
    const amountChangeHandler = (e) =>{
        setAmount(e.target.value);
    };
    const dateChangeHandler = (e) =>{
        setDate(e.target.value);
    };

    const submitHandler = (e) =>{

        e.preventDefault();

        const ExpenseData = {
            title  : Title,
            amount : +Amount,
            date   : Date,

        };
        
        props.onSaveData(ExpenseData)
        setTitle('');
        setAmount('');
        setDate('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
          <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={Title} onChange={titleChangeHandler} />
          </div>

          <div className="new-expense__control">
              <label>Amount</label>
              <input type="number" min="50" step='5' value={Amount} onChange={amountChangeHandler} />
          </div>

          <div className="new-expense__control">
              <label>Date</label>
              <input type="date" value={Date} onChange={dateChangeHandler} />
          </div>
      </div>
      <div className="new-expense__actions">
          <button type="cancle" onClick={props.onCancle}>Cancle</button>
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
