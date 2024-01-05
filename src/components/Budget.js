import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, currency, budget, expenses } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    },0);

    const setBudget = (val) => {
        console.log(val);
        dispatch({
            type: 'SET_BUDGET',
            payload: val
        })
    }

    const handleBudgetChange = (event) => {
        if(event < totalExpenses) {
            alert("You cannot reduce the budget value lower than spending.");
        } else if(event > 20000) {
            alert("The budget cannot exceet 20,000.");
        } else {
            setNewBudget(event);
            setBudget(event);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={(event) => handleBudgetChange(event.target.value)}></input>
        </div>
    );
};

export default Budget;