import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const DUMMY_EXPENSES = [{
  id: 'el1',
  date: new Date('2022, 02, 28'),
  title: 'Car Insurance',
  amount: 294.67
},
{
  id: 'el2',
  date: new Date('2022, 03, 28'),
  title: 'Car Insurance 2',
  amount: 179.67
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
