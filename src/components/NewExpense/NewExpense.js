
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpense}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const saveExpenseHandler = newExpense => {
    const newExpense__ = {
      ...newExpense,
      id: Math.random().toString()
    }
    onAddExpense(newExpense__);
  }
  return (
    <div className='new-expense'>
      {isExpanded && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={() => setIsExpanded(false)}/>}
      {!isExpanded && <button onClick={() => setIsExpanded(true)}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;