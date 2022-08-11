import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import react, { useState } from 'react';
const DUMMY_EXPENSES = [{
  id: 'el1',
  date: new Date('2021, 02, 28'),
  title: 'Car Insurance',
  amount: 294.67
}];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses} />

    </div>
  );
}

export default App;
