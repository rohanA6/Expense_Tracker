import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const changeHandler = (e) => {
    props.onCahangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.select}  onChange={changeHandler}>
          <option value="2019">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
