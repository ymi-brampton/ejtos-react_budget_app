import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const changeCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Currency:</span>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option selected="selected" value="£" name="marketing">£ Pound</option>
                <option value="€" name="sales">€ Euro</option>
                <option value="₹" name="finance">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;