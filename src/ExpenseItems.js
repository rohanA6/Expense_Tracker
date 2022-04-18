
import "./ExpenseItems.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

const ExpenseItems = (props) => {


  return (
    <Card className="Expense-item_details">

      <ExpenseDate date= {props.date}/>

      <div className="Expense-item_description">
        <h2>{props.title}</h2>
      </div>

      <div className="Expense-item_price">{props.amount}₹</div>
    </Card>
  );
};

export default ExpenseItems;
