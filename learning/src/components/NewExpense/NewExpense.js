import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [addNewExpense, setAddNewExpense] = useState(false)

    const saveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setAddNewExpense(false);
    }
    
    const addExpenseHandler = () =>{
        setAddNewExpense(true)
    }

    if (addNewExpense) {
        return (<div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />
        </div>)
    }
    return <div className='new-expense'>
    <button onClick={addExpenseHandler}>Add New Expense</button>
    </div>
 
}

export default NewExpense;