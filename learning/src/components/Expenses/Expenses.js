import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    console.log(props.items)
    const [filteredYear, setFilteredYear] = useState('');
    const filterChangeHandler = newYear => { 
        console.log('New Year: ', newYear)
        setFilteredYear(newYear); 
    }

    return (
        <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <div>{filteredYear}</div>
            <Card className="expenses">
                {props.items.map(item => 
                    <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
                )}
                
            </Card>
        </div>

    )
}

export default Expenses;